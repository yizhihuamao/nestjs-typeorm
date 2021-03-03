import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './entities/user-role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRolesService {
  constructor(
    @InjectRepository(UserRole)
    private readonly userRolesRepository: Repository<UserRole>,
  ) { }

  create(createUserRoleDto: CreateUserRoleDto) {
    const userRole = new UserRole();
    userRole.role = createUserRoleDto.role
    return this.userRolesRepository.save(userRole)
  }

  findAll() {
    return this.userRolesRepository.find();
  }

  /*   findOne(id: number) {
      return `This action returns a #${id} userRole`;
    }
  
    update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
      return `This action updates a #${id} userRole`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} userRole`;
    } */
}
