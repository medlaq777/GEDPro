import { Injectable, Logger } from '@nestjs/common';
import * as Tesseract from 'tesseract.js';
import { IOCRService } from 'src/core/interfaces/ocr-service.interface';

@Injectable()
export class TesseractProvider implements IOCRService {
  private logger = new Logger(TesseractProvider.name);

  async extractText(imageBuffer: Buffer): Promise<string> {
    try {
      this.logger.log('Starting OCR extraction...');
      const result = await Tesseract.recognize(imageBuffer, 'eng', {
        logger: (m) => this.logger.debug(m),
      });
      return result.data.text;
    } catch (error) {
      this.logger.error('OCR Extraction failed', error);
      throw error;
    }
  }
}
