import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): import("./interfaces/car.interface").Car;
    createCar(createCardDto: CreateCarDto): import("./interfaces/car.interface").Car;
    updateCar(id: string, body: any): any;
    deleteCar(id: string): {
        method: string;
        id: string;
    };
}
