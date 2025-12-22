import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, ForbiddenException, Inject } from '@nestjs/common';
import type { IUsersService } from './interfaces/users-service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';


@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(
    @Inject('IUsersService') private readonly usersService: IUsersService,
  ) {}

  @Post()
  @Roles('ADMIN_RH')
  create(@Body() createUserDto: CreateUserDto, @Request() req) {
    // Enforce creation within own organization for ADMIN_RH, or allow override if super admin (not scoped here)
    // For now, assume ADMIN_RH creates users for their own org
    if (req.user.organizationId) {
        createUserDto.organizationId = req.user.organizationId;
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles('ADMIN_RH', 'RH')
  findAll(@Request() req) {
    return this.usersService.findAll(req.user.organizationId);
  }

  @Get(':id')
  @Roles('ADMIN_RH', 'RH', 'MANAGER')
  findOne(@Param('id') id: string, @Request() req) {
    // Users can see themselves or ADMIN/RH can see users in their org
    // Strict multi-tenant: Must be in same org
    return this.usersService.findOne(id, req.user.organizationId);
  }

  @Patch(':id')
  @Roles('ADMIN_RH')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Request() req) {
    return this.usersService.update(id, updateUserDto, req.user.organizationId);
  }

  @Delete(':id')
  @Roles('ADMIN_RH')
  remove(@Param('id') id: string, @Request() req) {
    return this.usersService.remove(id, req.user.organizationId);
  }
}
