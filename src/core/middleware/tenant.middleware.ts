import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export interface RequestWithTenant extends Request {
  tenantId?: string;
}

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: RequestWithTenant, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id'] as string || (req as any).user?.organizationId;
    
    // For public routes (login), tenant might not be present yet, handled by Guard or Service
    // For protected routes, we expect tenantId to be extracted from JWT (via Passport)
    // Here we can formalize it: if user is authenticated, set tenantId from user
    
    // Note: Passport middleware usually runs after this if this is global. 
    // If we want it after authentication, we should scope it or rely on Guard.
    // Ideally, for true isolation, we extract from header or domain.
    // For this use case (User Story 1.3), "Organization" is the tenant.
    
    if (tenantId) {
        req.tenantId = tenantId;
    }
    
    next();
  }
}
