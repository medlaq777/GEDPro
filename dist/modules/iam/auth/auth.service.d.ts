import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IAuthService } from './interfaces/auth-service.interface';
import { OrganizationsService } from '../../organization/organizations.service';
export declare class AuthService implements IAuthService {
    private usersService;
    private jwtService;
    private orgService;
    constructor(usersService: UsersService, jwtService: JwtService, orgService: OrganizationsService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(registerDto: any): Promise<import("../users/entities/user.entity").User>;
}
