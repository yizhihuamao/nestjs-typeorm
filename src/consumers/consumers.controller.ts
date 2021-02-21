import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { Consumer } from './entities/consumer.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('consumers api（消费者）')
@Controller('consumers')
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) { }

  @Post()
  create(@Body() createConsumerDto: CreateConsumerDto): Promise<Consumer> {
    return this.consumersService.create(createConsumerDto);
  }

  @Get()
  findAll(): Promise<Consumer[]> {
    return this.consumersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Consumer> {
    return this.consumersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConsumerDto: UpdateConsumerDto): Promise<Consumer> {
    return this.consumersService.update(+id, updateConsumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Consumer> {
    return this.consumersService.remove(+id);
  }
}
