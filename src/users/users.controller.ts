import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../common/guards/roles.decorator'
import { Role } from '../common/guards/role.enum'
import { RolesGuard } from '../common/guards/roles.guard'

@ApiTags('user api')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':userId')
  findById(@Param('userId') userId: string): Promise<User> {
    return this.usersService.findById(userId);
  }

  @Get('findByName/:username')
  findOne(@Param('username') username: string): Promise<User> {
    return this.usersService.findOne(username);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
