import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

import { IRolesService } from './interfaces/roles-service.interface';

@Injectable()
export class RolesService implements IRolesService, OnModuleInit {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async onModuleInit() {
    await this.seedRoles();
  }

  async seedRoles() {
    const roles = ['ADMIN_RH', 'RH', 'MANAGER'];
    for (const roleName of roles) {
      const exists = await this.rolesRepository.findOneBy({ name: roleName });
      if (!exists) {
        await this.rolesRepository.save(this.rolesRepository.create({ name: roleName }));
        console.log(`Seeded Role: ${roleName}`);
      }
    }
  }

  create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.save(this.rolesRepository.create(createRoleDto));
  }

  findAll() {
    return this.rolesRepository.find();
  }

  findOne(id: string) {
    return this.rolesRepository.findOneBy({ id });
  }

  findByName(name: string) {
      return this.rolesRepository.findOneBy({ name });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.update(id, updateRoleDto);
  }

  remove(id: string) {
    return this.rolesRepository.delete(id);
  }
}
