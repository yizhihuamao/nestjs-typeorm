import {
  Controller, Get, Post, Body, Put, Param, Delete, Query,
  HttpStatus, UseFilters, ParseIntPipe, UseGuards, Inject
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { RolesGuard } from '../common/guards/roles.guard';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Query('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    this.logger.info('Returning suggestions...');
    return this.catsService.findOne(id);
  }

  @Put(':id')
  @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
