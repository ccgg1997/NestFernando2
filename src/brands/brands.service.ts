import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid} from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //     id: uuid(),
    //     name: 'Toyota',
    //     createdAt: new Date().getTime()
    // },
    // {
    //     id: uuid(),
    //     name: 'Ford',
    //     createdAt: new Date().getTime()
    // },
    // {
    //     id: uuid(),
    //     name: 'Honda',
    //     createdAt: new Date().getTime()
    // },
    // {
    //     id: uuid(),
    //     name: 'Chevrolet',
    //     createdAt: new Date().getTime()
    // },
    // {
    //     id: uuid(),
    //     name: 'BMW',
    //     createdAt: new Date().getTime()
    // },
    // {
    //     id: uuid(),
    //     name: 'Audi',
    //     createdAt: new Date().getTime()
    // }
]
;
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
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand) throw new Error(`Brand with id '${id}' not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne( id );

    this.brands = this.brands.map(
      brand =>{
        if (brand.id === id){
          brandDB.updatedAt = new Date().getTime();
          brandDB ={...brandDB, ...updateBrandDto, id};
          return brandDB;
        }
        return brand;
      }
    )

    return brandDB;
  }

  remove(id: string) {
    let brandDB = this.findOne( id );
    this.brands = this.brands.filter(brand=>brand.id != id)

    return brandDB;
  }

  fillBrandsWithSeedData(brands:Brand[]){
    this.brands = brands;

}
}
