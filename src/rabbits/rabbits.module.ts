import { Module } from '@nestjs/common';
import { RabbitsService } from './rabbits.service';
import { RabbitsController } from './rabbits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rabbit } from './entities/rabbit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rabbit])],
  controllers: [RabbitsController],
  providers: [RabbitsService]
})
export class RabbitsModule { }
