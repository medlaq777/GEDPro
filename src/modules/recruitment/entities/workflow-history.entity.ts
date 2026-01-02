import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Candidate } from './candidate.entity';
import { CandidateStatus } from '../enums/candidate-status.enum';

@Entity('workflow_history')
export class WorkflowHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Candidate, (candidate) => candidate.history, { onDelete: 'CASCADE' })
  candidate: Candidate;

  @Column({ type: 'enum', enum: CandidateStatus })
  previousStatus: CandidateStatus;

  @Column({ type: 'enum', enum: CandidateStatus })
  newStatus: CandidateStatus;

  @Column({ nullable: true })
  changedByUserId: string;

  @Column({ nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;
}
