import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { IRolesService } from './interfaces/roles-service.interface';
export declare class RolesService implements IRolesService, OnModuleInit {
    private rolesRepository;
    constructor(rolesRepository: Repository<Role>);
    onModuleInit(): Promise<void>;
    seedRoles(): Promise<void>;
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: string): Promise<Role | null>;
    findByName(name: string): Promise<Role | null>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
