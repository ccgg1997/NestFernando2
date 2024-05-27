export declare class CarsService {
    private cars;
    findAll(): {
        id: number;
        brand: string;
        model: string;
    }[];
    findCarById(id: number): {
        id: number;
        brand: string;
        model: string;
    };
}
