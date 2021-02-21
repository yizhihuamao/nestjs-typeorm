import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photosRepository: Repository<Photo>,
  ) { }

  create(createPhotoDto: CreatePhotoDto) {
    const photo = new Photo();
    photo.name = createPhotoDto.name;
    photo.description = createPhotoDto.description;
    photo.filename = createPhotoDto.filename;
    photo.views = createPhotoDto.views;
    photo.isPublished = createPhotoDto.isPublished;
    return this.photosRepository.save(photo);
  }

  findAll() {
    return this.photosRepository.find();
  }

  findOne(id: number) {
    return this.photosRepository.findOne(id);
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    // 这段代码只是演示，实际要使用事务
    const photo = await this.findOne(id);
    photo.name = updatePhotoDto.name;
    photo.description = updatePhotoDto.description;
    photo.filename = updatePhotoDto.filename;
    photo.views = updatePhotoDto.views;
    photo.isPublished = updatePhotoDto.isPublished;
    return this.photosRepository.save(photo);
  }

  async remove(id: number) {
    // 这段代码只是演示，实际要使用事务
    const user = await this.findOne(id);
    return this.photosRepository.remove(user);
  }
}
