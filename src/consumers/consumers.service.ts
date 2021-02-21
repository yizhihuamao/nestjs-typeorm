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
    return `This action returns all consumers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consumer`;
  }

  update(id: number, updateConsumerDto: UpdateConsumerDto) {
    return `This action updates a #${id} consumer`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumer`;
  }
}
