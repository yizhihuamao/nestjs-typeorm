import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RabbitsService } from './rabbits.service';
import { CreateRabbitDto } from './dto/create-rabbit.dto';
import { UpdateRabbitDto } from './dto/update-rabbit.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rabbit api 测试迁移')
@Controller('rabbits')
export class RabbitsController {
  constructor(private readonly rabbitsService: RabbitsService) { }

  @Post()
  create(@Body() createRabbitDto: CreateRabbitDto) {
    return this.rabbitsService.create(createRabbitDto);
  }

  /*   @Get()
    findAll() {
      return this.rabbitsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.rabbitsService.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateRabbitDto: UpdateRabbitDto) {
      return this.rabbitsService.update(+id, updateRabbitDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.rabbitsService.remove(+id);
    } */
}
