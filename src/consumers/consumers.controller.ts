import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('consumers api（消费者）')
@Controller('consumers')
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) { }

  @Post()
  create(@Body() createConsumerDto: CreateConsumerDto) {
    return this.consumersService.create(createConsumerDto);
  }

  @Get()
  findAll() {
    return this.consumersService.findAll();
  }

  @Get('abcd')
  findAll2() {
    return this.consumersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConsumerDto: UpdateConsumerDto) {
    return this.consumersService.update(+id, updateConsumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumersService.remove(+id);
  }
}
