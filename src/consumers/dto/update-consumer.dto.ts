import { PartialType } from '@nestjs/mapped-types';
import { CreateConsumerDto } from './create-consumer.dto';

export class UpdateConsumerDto extends PartialType(CreateConsumerDto) {}
