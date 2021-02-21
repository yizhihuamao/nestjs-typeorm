import { PickType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create-dog.dto';

export class DeleteDogDto extends PickType(CreateDogDto, ['name']) {

}
