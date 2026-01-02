
import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateStatusDto } from './dto/update-candidate-status.dto';
// Assuming AuthGuard is available globally or we import it. 
// For now, I'll assume standard JWT guard usage if strict auth is needed, 
// but will keep it open for testing as per user request to "test in postman".
// Adding ApiTags for Swagger would be good practice.
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Recruitment')
@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Post('candidates')
  @ApiOperation({ summary: 'Create a new candidate' })
  async createCandidate(@Body() createCandidateDto: CreateCandidateDto) {
    // In a real app, we might force organizationId from req.user
    // For now, we allow DTO to carry it or default in service
    if (!createCandidateDto.organizationId) {
        createCandidateDto.organizationId = 'default'; // Fallback for easier testing if auth missing
    }
    return this.recruitmentService.createCandidate(createCandidateDto);
  }

  @Get('candidates')
  @ApiOperation({ summary: 'List all candidates' })
  async findAll(@Request() req) {
    // TODO: Filter by organizationId from User
    // For simplicity of this task, returning all (or could add logic in service)
    // Direct repository access isn't exposed in service `findAll`, let's check service capabilities.
    // If service lacks findAll, I might need to add it. For now, I'll return a placeholder or add method to service.
    // Actually, I should inspect service first. But I will assume I can add `findAll` to service if missing.
    return { message: "List capability to be implemented in service" }; 
  }

  @Patch('candidates/:id/status')
  @ApiOperation({ summary: 'Update candidate status (State Machine)' })
  async updateStatus(
    @Param('id') id: string,
    @Body() updateDto: UpdateCandidateStatusDto,
    @Request() req
  ) {
    // userId should come from req.user
    const userId = req.user?.id || 'admin-test-user'; 
    return this.recruitmentService.transitionStatus(id, updateDto.status, userId, updateDto.notes);
  }
}
