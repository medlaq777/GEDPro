import { RecruitmentService } from './recruitment.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateStatusDto } from './dto/update-candidate-status.dto';
export declare class RecruitmentController {
    private readonly recruitmentService;
    constructor(recruitmentService: RecruitmentService);
    createCandidate(createCandidateDto: CreateCandidateDto): Promise<import("./entities/candidate.entity").Candidate>;
    findAll(req: any): Promise<{
        message: string;
    }>;
    updateStatus(id: string, updateDto: UpdateCandidateStatusDto, req: any): Promise<import("./entities/candidate.entity").Candidate>;
}
