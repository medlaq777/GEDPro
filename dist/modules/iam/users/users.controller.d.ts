import type { IUsersService } from './interfaces/users-service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: IUsersService);
    create(createUserDto: CreateUserDto, req: any): Promise<import("./entities/user.entity").User>;
    findAll(req: any): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string, req: any): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto, req: any): Promise<import("./entities/user.entity").User>;
    remove(id: string, req: any): Promise<import("./entities/user.entity").User>;
}
