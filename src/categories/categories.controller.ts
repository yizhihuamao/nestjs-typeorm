import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories api')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Post()
  create() {
    return this.categoriesService.create();
  }

  @Get()
  findTrees() {
    return this.categoriesService.findTrees();
  }

  @Get('findRoots')
  findRoots() {
    return this.categoriesService.find('findRoots');
  }

  /*   @Get(':id')
    findOne(@Param('id') id: string) {
      return this.categoriesService.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
      return this.categoriesService.update(+id, updateCategoryDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.categoriesService.remove(+id);
    } */
}
