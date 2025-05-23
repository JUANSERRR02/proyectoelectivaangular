import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateCpuDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  cores: number;

  @IsNumber()
  @IsNotEmpty()
  threads: number;

  @IsNumber()
  @IsNotEmpty()
  clockSpeed: number;

  @IsString()
  @IsOptional()
  description?: string;
}