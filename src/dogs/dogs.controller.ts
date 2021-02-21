import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { DeleteDogDto } from './dto/delete-dog.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('狗的api')
@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) { }

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete()
  remove(@Query() deleteDogDto: DeleteDogDto) {
    return this.dogsService.remove(deleteDogDto.name);
  }
}
