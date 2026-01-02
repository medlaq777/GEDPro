import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { WorkflowHistory } from './workflow-history.entity';
import { CandidateStatus } from '../enums/candidate-status.enum';

@Entity('candidates')
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  resumeUrl: string;

  @Column({
    type: 'enum',
    enum: CandidateStatus,
    default: CandidateStatus.NEW,
  })
  status: CandidateStatus;

  @Column()
  organizationId: string;

  @OneToMany(() => WorkflowHistory, (history) => history.candidate)
  history: WorkflowHistory[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
