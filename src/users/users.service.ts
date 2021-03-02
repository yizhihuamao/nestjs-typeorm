import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;

    const saltOrRounds = 10;
    user.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const { password, ...savedUser } = await this.usersRepository.save(user);
    return savedUser
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(userId: string): Promise<any> {
    return this.usersRepository.createQueryBuilder("user")
      .where("user.userId = :userId", { userId })
      .getOne()
  }

  findOne(username: string): Promise<any> {
    return this.usersRepository.createQueryBuilder("user")
      .where("user.username = :username", { username })
      .select(['user.userId', 'user.username', 'user.password'])
      .getOne()
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
