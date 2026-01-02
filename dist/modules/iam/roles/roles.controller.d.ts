import type { IRolesService } from './interfaces/roles-service.interface';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: IRolesService);
    create(createRoleDto: CreateRoleDto): Promise<import("./entities/role.entity").Role>;
    findAll(): Promise<import("./entities/role.entity").Role[]>;
    findOne(id: string): Promise<import("./entities/role.entity").Role | null>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<any>;
    remove(id: string): Promise<any>;
}
