import { Module } from '@nestjs/common';
import { GiraffesService } from './giraffes.service';
import { GiraffesController } from './giraffes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Giraffe, GiraffeSchema } from './schemas/giraffe.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Giraffe.name, schema: GiraffeSchema }
  ])],
  controllers: [GiraffesController],
  providers: [GiraffesService]
})
export class GiraffesModule { }
