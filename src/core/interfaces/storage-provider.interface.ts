export interface IStorageProvider {
  upload(file: Buffer, path: string, mimeType: string): Promise<{ url: string; key: string }>;
  delete(key: string): Promise<void>;
  getSignedUrl(key: string): Promise<string>;
}
