import { IsString,IsUUID } from "class-validator";

export class DeleteCarDto{
    @IsString()
    @IsUUID()
    readonly brand: string;
}