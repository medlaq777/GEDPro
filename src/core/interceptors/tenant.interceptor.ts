import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const organizationId = request.headers['x-organization-id'] || request.user?.organizationId;

    if (organizationId) {
      // Attach organizationId to the request object for easy access in controllers/services
      request['organizationId'] = organizationId;
    }

    return next.handle();
  }
}
