import { IOCRService } from 'src/core/interfaces/ocr-service.interface';
export declare class TesseractProvider implements IOCRService {
    private logger;
    extractText(imageBuffer: Buffer): Promise<string>;
}
