import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GiraffesService } from './giraffes.service';
import { CreateGiraffeDto } from './dto/create-giraffe.dto';
import { UpdateGiraffeDto } from './dto/update-giraffe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('giraffes api mongodb测试')
@Controller('giraffes')
export class GiraffesController {
  constructor(private readonly giraffesService: GiraffesService) { }

  @Post()
  create(@Body() createGiraffeDto: CreateGiraffeDto) {
    return this.giraffesService.create(createGiraffeDto);
  }

  @Get()
  findAll() {
    return this.giraffesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giraffesService.findOne(+id);
  }

  /*   @Put(':id')
    update(@Param('id') id: string, @Body() updateGiraffeDto: UpdateGiraffeDto) {
      return this.giraffesService.update(+id, updateGiraffeDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.giraffesService.remove(+id);
    } */
}
