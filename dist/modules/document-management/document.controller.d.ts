import { DocumentService } from './document.service';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    uploadFile(file: Express.Multer.File, req: any): Promise<import("./entities/document-metadata.entity").DocumentMetadata>;
}
