import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid} from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id:uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    }
  ];
  create(createBrandDto: CreateBrandDto) {
    const{name} = createBrandDto;
    const brand: Brand = {
      id: uuid(),
     name: name.toLowerCase(),
      createdAt: new Date().getTime()
    };

    this.brands.push(brand);
    
    return brand;
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand) throw new Error(`Brand with id '${id}' not found`);
    return brand;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
