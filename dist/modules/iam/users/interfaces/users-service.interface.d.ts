import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
export interface IUsersService {
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(organizationId: string): Promise<User[]>;
    findOne(id: string, organizationId?: string): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto, organizationId?: string): Promise<User>;
    remove(id: string, organizationId?: string): Promise<User>;
}
