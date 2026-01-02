import { User } from '../../users/entities/user.entity';
import { Permission } from './permission.entity';
import { Organization } from '../../../organization/entities/organization.entity';
export declare class Role {
    id: string;
    name: string;
    organizationId: string;
    organization: Organization;
    permissions: Permission[];
    users: User[];
}
