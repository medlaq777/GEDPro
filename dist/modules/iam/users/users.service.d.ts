import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RolesService } from '../roles/roles.service';
import { IUsersService } from './interfaces/users-service.interface';
export declare class UsersService implements IUsersService {
    private usersRepository;
    private rolesService;
    constructor(usersRepository: Repository<User>, rolesService: RolesService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(organizationId: string): Promise<User[]>;
    findOne(id: string, organizationId?: string): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto, organizationId?: string): Promise<User>;
    remove(id: string, organizationId?: string): Promise<User>;
}
