import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';
import * as bcrypt from 'bcrypt';
import { RolesService } from '../roles/roles.service';

import { IUsersService } from './interfaces/users-service.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private rolesService: RolesService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    
    let roleEntity: Role | null = null;
    if (createUserDto.role) {
        roleEntity = await this.rolesService.findByName(createUserDto.role);
        if (!roleEntity) {
            throw new BadRequestException(`Role ${createUserDto.role} not found`);
        }
    } else {
        // Default role
        roleEntity = await this.rolesService.findByName('MANAGER');
    }
    
    // Create payload. Exclude 'role' string and replace with 'role' Entity
    const { role, ...userData } = createUserDto;

    const user = this.usersRepository.create({
      ...userData,
      role: roleEntity as Role, // Cast as Role since we handled null case or default
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  // Filter by organization
  findAll(organizationId: string) {
    return this.usersRepository.find({
      where: { organizationId },
      relations: ['organization', 'role'],
    });
  }

  async findOne(id: string, organizationId?: string) {
    const where: any = { id };
    if (organizationId) {
      where.organizationId = organizationId;
    }
    const user = await this.usersRepository.findOne({
        where,
        relations: ['organization', 'role'],
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  
  findOneByEmail(email: string) {
    // Eager load role is on in Entity, but explicit relations safely
    return this.usersRepository.findOne({ where: { email }, relations: ['organization', 'role'] });
  }

  async update(id: string, updateUserDto: UpdateUserDto, organizationId?: string) {
    // Check existence and ownership first
    const user = await this.findOne(id, organizationId);
    
    const { role, ...updateData } = updateUserDto;
    let roleEntity: Role | undefined;

    if (role) {
        const found = await this.rolesService.findByName(role);
         if (!found) {
            throw new BadRequestException(`Role ${role} not found`);
        }
        roleEntity = found;
    }

    if (updateData.password) {
        const salt = await bcrypt.genSalt();
        updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    // Combine updates
    const updates: any = { ...updateData };
    if (roleEntity) {
        updates.role = roleEntity;
    }

    await this.usersRepository.save({
        ...user,
        ...updates
    });
    
    return this.findOne(id, organizationId);
  }

  async remove(id: string, organizationId?: string) {
    const user = await this.findOne(id, organizationId);
    return this.usersRepository.remove(user);
  }
}
