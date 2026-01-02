import { User } from '../../iam/users/entities/user.entity';
export declare class Organization {
    id: string;
    name: string;
    users: User[];
}
