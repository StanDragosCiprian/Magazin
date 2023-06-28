import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTvDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  desctiption: string;

  @IsNumber()
  @IsNotEmpty()
  diameter: number;

  @IsString()
  @IsNotEmpty()
  rezolution: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
