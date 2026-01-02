"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = __importStar(require("bcrypt"));
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    usersRepository;
    rolesService;
    constructor(usersRepository, rolesService) {
        this.usersRepository = usersRepository;
        this.rolesService = rolesService;
    }
    async create(createUserDto) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        let roleEntity = null;
        if (createUserDto.role) {
            roleEntity = await this.rolesService.findByName(createUserDto.role);
            if (!roleEntity) {
                throw new common_1.BadRequestException(`Role ${createUserDto.role} not found`);
            }
        }
        else {
            roleEntity = await this.rolesService.findByName('MANAGER');
        }
        const { role, ...userData } = createUserDto;
        const user = this.usersRepository.create({
            ...userData,
            role: roleEntity,
            password: hashedPassword,
        });
        return this.usersRepository.save(user);
    }
    findAll(organizationId) {
        return this.usersRepository.find({
            where: { organizationId },
            relations: ['organization', 'role'],
        });
    }
    async findOne(id, organizationId) {
        const where = { id };
        if (organizationId) {
            where.organizationId = organizationId;
        }
        const user = await this.usersRepository.findOne({
            where,
            relations: ['organization', 'role'],
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    findOneByEmail(email) {
        return this.usersRepository.findOne({ where: { email }, relations: ['organization', 'role'] });
    }
    async update(id, updateUserDto, organizationId) {
        const user = await this.findOne(id, organizationId);
        const { role, ...updateData } = updateUserDto;
        let roleEntity;
        if (role) {
            const found = await this.rolesService.findByName(role);
            if (!found) {
                throw new common_1.BadRequestException(`Role ${role} not found`);
            }
            roleEntity = found;
        }
        if (updateData.password) {
            const salt = await bcrypt.genSalt();
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }
        const updates = { ...updateData };
        if (roleEntity) {
            updates.role = roleEntity;
        }
        await this.usersRepository.save({
            ...user,
            ...updates
        });
        return this.findOne(id, organizationId);
    }
    async remove(id, organizationId) {
        const user = await this.findOne(id, organizationId);
        return this.usersRepository.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService])
], UsersService);
//# sourceMappingURL=users.service.js.map