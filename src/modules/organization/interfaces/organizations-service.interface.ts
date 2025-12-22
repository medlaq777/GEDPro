import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { Organization } from '../entities/organization.entity';

export interface IOrganizationsService {
  create(createOrganizationDto: CreateOrganizationDto): Promise<Organization>;
  findAll(): Promise<Organization[]>;
  findOne(id: string): Promise<Organization | null>;
  update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<any>;
  remove(id: string): Promise<any>;
  getDefaultOrganization(): Promise<Organization>;
}
