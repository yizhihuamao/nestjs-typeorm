import { PartialType } from '@nestjs/mapped-types';
import { CreateWriterDto } from './create-writer.dto';

export class UpdateWriterDto extends PartialType(CreateWriterDto) {}
