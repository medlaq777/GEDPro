import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './entities/candidate.entity';
import { CandidateStatus } from './enums/candidate-status.enum';
import { WorkflowHistory } from './entities/workflow-history.entity';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CandidateAnalysis, CandidateAnalysisDocument } from './schemas/candidate-analysis.schema';

import { OnEvent } from '@nestjs/event-emitter';
import { CandidateState } from './state-machine/candidate-state.base';
import { NewState, ScreeningState, InterviewState, OfferState, HiredState, RejectedState } from './state-machine/concrete-states';

@Injectable()
export class RecruitmentService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
    @InjectRepository(WorkflowHistory)
    private historyRepository: Repository<WorkflowHistory>,
    @InjectModel(CandidateAnalysis.name)
    private analysisModel: Model<CandidateAnalysisDocument>,
  ) {}

  async createCandidate(data: Partial<Candidate>) {
    const candidate = this.candidateRepository.create(data);
    return this.candidateRepository.save(candidate);
  }

  private readonly SKILL_DICTIONARY = {
    backend: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C#', '.NET', 'Go', 'Rust', 'PHP', 'Laravel'],
    frontend: ['React', 'Angular', 'Vue.js', 'Next.js', 'Nuxt', 'HTML', 'CSS', 'Sass', 'Tailwind', 'Redux', 'Zustand'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Supabase', 'Firebase'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
    tools: ['Git', 'Jira', 'Postman', 'Swagger', 'Figma', 'Trello'],
  };

  async extractSkills(candidateId: string, text: string) {
    const foundSkills = new Set<string>();
    const normalizedText = text.toLowerCase();

    // Iterate over categories and skills
    for (const [category, skills] of Object.entries(this.SKILL_DICTIONARY)) {
      for (const skill of skills) {
        // Escape special regex chars like . or + (e.g., C++, Node.js)
        const escapedSkill = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Regex to match whole words/tokens, handling word boundaries correctly
        const regex = new RegExp(`(?:^|\\s|[.,;])(${escapedSkill})(?:$|\\s|[.,;])`, 'i');
        
        if (regex.test(text)) {
           foundSkills.add(skill); // Add the original capitalized name
        }
      }
    }

    const skillsArray = Array.from(foundSkills);

    await this.analysisModel.create({
      candidateId,
      skills: skillsArray,
      experienceYears: 0,
      rawAnalysis: { 
        sourceLength: text.length, 
        detectedCategories: Object.keys(this.SKILL_DICTIONARY).filter(cat => 
            this.SKILL_DICTIONARY[cat].some(s => skillsArray.includes(s))
        )
      },
    });
    
    return skillsArray;
  }

  @OnEvent('form.submitted')
  async handleFormSubmission(payload: any) {
    if (payload.answers && payload.answers.email && payload.organizationId) {
        await this.createCandidate({
            email: payload.answers.email,
            fullName: payload.answers.fullName || 'Unknown',
            organizationId: payload.organizationId,
        });
    } else {
        // Log warning: submission ignored due to missing email or organization context
        console.warn('Form submission ignored: missing email or organizationId');
    }
  }

  async transitionStatus(candidateId: string, newStatus: CandidateStatus, userId: string, notes?: string) {
    const candidate = await this.candidateRepository.findOne({ where: { id: candidateId } });
    if (!candidate) throw new BadRequestException('Candidate not found');

    const oldStatus = candidate.status;
    
    // State Pattern Implementation
    const currentState = this.getState(candidate.status, candidate);

    if (candidate.status === newStatus) {
        return candidate;
    }

    if (!currentState.canTransitionTo(newStatus)) {
        throw new BadRequestException(`Cannot transition from ${oldStatus} to ${newStatus}`);
    }

    // Execute Exit Logic
    await currentState.onExit();

    // Update DB
    candidate.status = newStatus;
    const savedCandidate = await this.candidateRepository.save(candidate);

    // Execute Enter Logic
    const nextState = this.getState(newStatus, savedCandidate);
    await nextState.onEnter();

    // Audit Log
    const history = this.historyRepository.create({
      candidate: savedCandidate,
      previousStatus: oldStatus,
      newStatus: newStatus,
      changedByUserId: userId,
      notes,
    });
    await this.historyRepository.save(history);

    return savedCandidate;
  }

  private getState(status: CandidateStatus, candidate: Candidate): CandidateState {
    const context = { candidate };
    switch (status) {
      case CandidateStatus.NEW: return new NewState(context);
      case CandidateStatus.SCREENING: return new ScreeningState(context);
      case CandidateStatus.INTERVIEW: return new InterviewState(context);
      case CandidateStatus.OFFER: return new OfferState(context);
      case CandidateStatus.HIRED: return new HiredState(context);
      case CandidateStatus.REJECTED: return new RejectedState(context);
      default: throw new Error(`Unknown state: ${status}`);
    }
  }
}
