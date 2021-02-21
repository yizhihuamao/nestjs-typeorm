import { Module } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { ConsumersController } from './consumers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumer } from './entities/consumer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consumer])],
  controllers: [ConsumersController],
  providers: [ConsumersService]
})
export class ConsumersModule { }
