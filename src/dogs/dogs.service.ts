import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  create(createDogDto: CreateDogDto) {
    return `This action adds a new ${createDogDto.dogShops} dog`;
  }

  findAll() {
    return `This action returns all dogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(name: string) {
    return `This action removes a #${name} dog`;
  }
}
