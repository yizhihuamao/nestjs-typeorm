import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('photos api（照片）')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) { }

  @Post()
  create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Photo> {
    return this.photosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConsumerDto: UpdatePhotoDto): Promise<Photo> {
    return this.photosService.update(+id, updateConsumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Photo> {
    return this.photosService.remove(+id);
  }
}
