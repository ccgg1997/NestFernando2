import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): import("./interfaces/car.interface").Car;
    createCar(body: any): any;
    updateCar(id: string, body: any): any;
    deleteCar(id: string): {
        method: string;
        id: string;
    };
}
