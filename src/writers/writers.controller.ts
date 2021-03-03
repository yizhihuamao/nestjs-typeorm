import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WritersService } from './writers.service';
import { CreateWriterDto } from './dto/create-writer.dto';
import { UpdateWriterDto } from './dto/update-writer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('writers api for CASL')
@Controller('writers')
export class WritersController {
  constructor(private readonly writersService: WritersService) { }

  @Post()
  create(@Body() createWriterDto: CreateWriterDto) {
    return this.writersService.create(createWriterDto);
  }

  @Get()
  findAll() {
    return this.writersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWriterDto: UpdateWriterDto) {
    return this.writersService.update(+id, updateWriterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writersService.remove(+id);
  }
}
