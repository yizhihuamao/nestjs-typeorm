import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryTreeRepository: TreeRepository<Category>,
  ) { }

  async create() {
    const a1 = new Category();
    a1.name = "a1";
    await this.categoryTreeRepository.save(a1);

    const a11 = new Category();
    a11.name = "a11";
    a11.parent = a1;
    await this.categoryTreeRepository.save(a11);

    const a12 = new Category();
    a12.name = "a12";
    a12.parent = a1;
    await this.categoryTreeRepository.save(a12);

    const a111 = new Category();
    a111.name = "a111";
    a111.parent = a11;
    await this.categoryTreeRepository.save(a111);

    const a112 = new Category();
    a112.name = "a112";
    a112.parent = a11;
    await this.categoryTreeRepository.save(a112);
  }

  findTrees() {
    return this.categoryTreeRepository.findTrees();
  }

  find(find: string) {
    return this.categoryTreeRepository[find]();
  }

  /* findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  } */
}
