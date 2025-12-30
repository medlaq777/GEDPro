export interface IOCRService {
  extractText(file: Buffer): Promise<string>;
}
