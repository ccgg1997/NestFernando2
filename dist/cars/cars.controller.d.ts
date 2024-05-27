import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): {
        id: number;
        brand: string;
        model: string;
    }[];
    getCarById(id: any): {
        marca: {
            id: number;
            brand: string;
            model: string;
        };
    };
    createCar(body: any): any;
    updateCar(body: any): any;
    deleteCar(id: number): {
        method: string;
        id: number;
    };
}
