import { Organization } from '../../../organization/entities/organization.entity';
import { Role } from '../../roles/entities/role.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    role: Role;
    roleId: string;
    organizationId: string;
    organization: Organization;
}
