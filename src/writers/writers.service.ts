import { Injectable } from '@nestjs/common';
import { CreateWriterDto } from './dto/create-writer.dto';
import { UpdateWriterDto } from './dto/update-writer.dto';

@Injectable()
export class WritersService {
  create(createWriterDto: CreateWriterDto) {
    return 'This action adds a new writer';
  }

  findAll() {
    return `This action returns all writers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} writer`;
  }

  update(id: number, updateWriterDto: UpdateWriterDto) {
    return `This action updates a #${id} writer`;
  }

  remove(id: number) {
    return `This action removes a #${id} writer`;
  }
}
