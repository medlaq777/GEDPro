
import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, UseGuards, Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentService } from './document.service';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../iam/auth/jwt-auth.guard';

@ApiTags('Document Management')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post('upload')
  @ApiOperation({ summary: 'Upload a document (CV, Contract, etc.)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    const userId = req.user.id;
    const organizationId = req.user.organizationId;
    
    // Using the service to process upload
    return this.documentService.processDocument(file, organizationId);
  }

  // TODO: Add GET /:id/download using service.getSignedUrl (if service exposes it)
}
