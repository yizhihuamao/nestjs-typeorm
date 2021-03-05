import { PartialType } from '@nestjs/mapped-types';
import { CreateGiraffeDto } from './create-giraffe.dto';

export class UpdateGiraffeDto extends PartialType(CreateGiraffeDto) {}
