import { Injectable } from '@nestjs/common';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consumer } from './entities/consumer.entity';

@Injectable()
export class ConsumersService {
  constructor(
    @InjectRepository(Consumer)
    private readonly usersRepository: Repository<Consumer>,
  ) { }

  create(createConsumerDto: CreateConsumerDto) {
    const user = new Consumer();
    user.firstName = createConsumerDto.firstName;
    user.lastName = createConsumerDto.lastName;
    user.age = createConsumerDto.age;
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, updateConsumerDto: UpdateConsumerDto) {
    // 这段代码只是演示，实际要使用事务
    const user = await this.findOne(id);
    user.firstName = updateConsumerDto.firstName;
    user.lastName = updateConsumerDto.lastName;
    user.age = updateConsumerDto.age;
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    // 这段代码只是演示，实际要使用事务
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
