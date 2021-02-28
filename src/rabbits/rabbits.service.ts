import { Injectable } from '@nestjs/common';
import { CreateRabbitDto } from './dto/create-rabbit.dto';
import { UpdateRabbitDto } from './dto/update-rabbit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rabbit } from './entities/rabbit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RabbitsService {
  constructor(
    @InjectRepository(Rabbit) private readonly rabbitsRepository: Repository<Rabbit>,
  ) { }

  create(createRabbitDto: CreateRabbitDto) {
    const rabbit = new Rabbit();
    rabbit.name = createRabbitDto.name;
    return this.rabbitsRepository.save(rabbit);
  }

  /*   findAll() {
      return `This action returns all rabbits`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} rabbit`;
    }
  
    update(id: number, updateRabbitDto: UpdateRabbitDto) {
      return `This action updates a #${id} rabbit`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} rabbit`;
    } */
}
