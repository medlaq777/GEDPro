import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { IAuthService } from './interfaces/auth-service.interface';

import { OrganizationsService } from '../../organization/organizations.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private orgService: OrganizationsService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
        email: user.email, 
        sub: user.id, 
        role: user.role?.name, 
        organizationId: user.organizationId 
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: any) {
    // Map RegisterDto to CreateUserDto. 
    const defaultOrg = await this.orgService.getDefaultOrganization();
    
    return this.usersService.create({
      ...registerDto,
      organizationId: defaultOrg.id, 
      role: 'MANAGER', // Default role for self-registered users
    });
  }
}
