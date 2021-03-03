import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRole } from '../user-roles/entities/user-role.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(UserRole) private readonly userRolesRepository: Repository<UserRole>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = new User();
    user.username = createUserDto.username;

    const saltOrRounds = 10;
    user.password = await bcrypt.hash(createUserDto.password, saltOrRounds);

    const userRoles = createUserDto.roleIds ? await this.userRolesRepository.findByIds(createUserDto.roleIds) : undefined
    user.roles = userRoles

    const { password, ...savedUser } = await this.usersRepository.save(user);
    return savedUser
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ["roles"] });
  }

  findById(userId: string): Promise<any> {
    return this.usersRepository.createQueryBuilder("user")
      .where("user.userId = :userId", { userId })
      .getOne()
  }

  findOne(username: string): Promise<any> {
    return this.usersRepository.createQueryBuilder("user")
      .leftJoinAndSelect("user.roles", "roles")
      .where("user.username = :username", { username })
      .addSelect("user.password")
      .getOne()
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
