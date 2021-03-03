import { Module } from '@nestjs/common';
import { WritersService } from './writers.service';
import { WritersController } from './writers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Writer } from './entities/writer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Writer])],
  controllers: [WritersController],
  providers: [WritersService]
})
export class WritersModule { }
