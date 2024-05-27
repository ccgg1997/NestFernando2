import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
    create(createCardDto: CreateCarDto): Car;
}
