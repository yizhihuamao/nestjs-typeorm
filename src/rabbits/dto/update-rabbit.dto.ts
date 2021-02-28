import { PartialType } from '@nestjs/mapped-types';
import { CreateRabbitDto } from './create-rabbit.dto';

export class UpdateRabbitDto extends PartialType(CreateRabbitDto) {}
