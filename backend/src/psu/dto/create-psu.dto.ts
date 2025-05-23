import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreatePsuDto {
  @IsString()
  name: string;

  @IsNumber()
  wattage: number;

  @IsString()
  @IsOptional()
  efficiencyRating?: string;

  @IsBoolean()
  @IsOptional()
  modular?: boolean;
}