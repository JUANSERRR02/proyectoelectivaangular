import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateGpuDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @IsNumber()
  @IsNotEmpty()
  memory: number;

  @IsString()
  @IsOptional()
  description?: string;
}