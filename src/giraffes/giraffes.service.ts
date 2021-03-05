import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGiraffeDto } from './dto/create-giraffe.dto';
import { UpdateGiraffeDto } from './dto/update-giraffe.dto';
import { Giraffe } from './schemas/giraffe.schema';

@Injectable()
export class GiraffesService {
  constructor(
    @InjectModel(Giraffe.name) private readonly giraffeModel: Model<Giraffe>
  ) { }

  create(createGiraffeDto: CreateGiraffeDto) {
    return 'This action adds a new giraffe';
  }

  findAll() {
    return `This action returns all giraffes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giraffe`;
  }

  update(id: number, updateGiraffeDto: UpdateGiraffeDto) {
    return `This action updates a #${id} giraffe`;
  }

  remove(id: number) {
    return `This action removes a #${id} giraffe`;
  }
}
