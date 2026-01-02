import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export interface RequestWithTenant extends Request {
    tenantId?: string;
}
export declare class TenantMiddleware implements NestMiddleware {
    use(req: RequestWithTenant, res: Response, next: NextFunction): void;
}
