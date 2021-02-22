import { IntersectionType } from '@nestjs/swagger';
import { CreateMetaDataDto } from './create-metadata.dto'
import { CreatePhotoDto } from './create-photo.dto'

export class CreatePhotoMetadataDto extends IntersectionType(
    CreateMetaDataDto,
    CreatePhotoDto,
) { }
