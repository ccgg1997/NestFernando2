import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/index';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
    create(createCardDto: CreateCarDto): Car;
    update(id: any, updateCarDto: any): Car;
    delete(id: string): Car;
    fillCarsWithSeedData(cars: Car[]): void;
}
