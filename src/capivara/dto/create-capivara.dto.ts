import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCapivaraDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsNumber()
    age?: number;

    @IsOptional()
    @IsString()
    health_status?: string;

    @IsOptional()
    @IsNumber()
    weigth?: number;

    @IsOptional()
    @IsString()
    habitat?: string;

    @IsOptional()
    @IsString()
    behavior?: string;

    @IsOptional()
    @IsString()
    diet?: string;

    @IsOptional()
    @IsString()
    note?: string;
}
