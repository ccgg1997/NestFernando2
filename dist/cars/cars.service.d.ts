import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/index';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
    create(createCardDto: CreateCarDto): Car;
    update(id: string, updateCardDto: UpdateCarDto): Car;
}
