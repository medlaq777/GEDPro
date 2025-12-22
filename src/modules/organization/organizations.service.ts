import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { IOrganizationsService } from './interfaces/organizations-service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationsService implements IOrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private orgRepository: Repository<Organization>,
  ) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    const org = this.orgRepository.create(createOrganizationDto);
    return this.orgRepository.save(org);
  }

  findAll() {
    return this.orgRepository.find();
  }

  findOne(id: string) {
    return this.orgRepository.findOneBy({ id });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.orgRepository.update(id, updateOrganizationDto);
  }

  remove(id: string) {
    return this.orgRepository.delete(id);
  }

  async getDefaultOrganization(): Promise<Organization> {
    const name = 'Default Organization';
    let org = await this.orgRepository.findOneBy({ name });
    if (!org) {
       org = this.orgRepository.create({ name });
       await this.orgRepository.save(org);
    }
    return org;
  }
}
