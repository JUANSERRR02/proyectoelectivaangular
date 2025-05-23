import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMotherboardDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  socketType: string;

  @IsString()
  @IsNotEmpty()
  formFactor: string;
}
