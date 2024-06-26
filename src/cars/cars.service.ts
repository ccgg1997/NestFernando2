import { Injectable, NotFoundException } from '@nestjs/common';
import {Car} from './interfaces/car.interface'
import { v4 as uuid} from 'uuid';
import{CreateCarDto,UpdateCarDto} from './dto/index'
import { DeleteCarDto } from './dto/delete-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla' 
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model: 'Civic' 
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee' 
        // },
    ];


    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {
        
        const car = this.cars.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }
    
    create(createCardDto: CreateCarDto){
        const car:Car ={
            id : uuid(),
            ...createCardDto
        }

        this.cars.push(car);
        return car;
    }

    update(id, updateCarDto) {
        let carDB = this.findOneById(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = Object.assign(Object.assign(Object.assign({}, carDB), updateCarDto), { id });
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    delete(id:string){
        let carDB = this.findOneById(id);
        this.cars = this.cars.filter(car=>car.id != id);
        return carDB;
    }

    fillCarsWithSeedData(cars:Car[]){
        this.cars = cars;

    }
}
