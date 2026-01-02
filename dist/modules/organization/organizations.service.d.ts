import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { IOrganizationsService } from './interfaces/organizations-service.interface';
import { Organization } from './entities/organization.entity';
import { Repository } from 'typeorm';
export declare class OrganizationsService implements IOrganizationsService {
    private orgRepository;
    constructor(orgRepository: Repository<Organization>);
    create(createOrganizationDto: CreateOrganizationDto): Promise<Organization>;
    findAll(): Promise<Organization[]>;
    findOne(id: string): Promise<Organization | null>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getDefaultOrganization(): Promise<Organization>;
}
