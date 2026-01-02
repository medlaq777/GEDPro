import type { IOrganizationsService } from './interfaces/organizations-service.interface';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: IOrganizationsService);
    create(createOrganizationDto: CreateOrganizationDto): Promise<import("./entities/organization.entity").Organization>;
    findAll(): Promise<import("./entities/organization.entity").Organization[]>;
    findOne(id: string): Promise<import("./entities/organization.entity").Organization | null>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<any>;
    remove(id: string): Promise<any>;
}
