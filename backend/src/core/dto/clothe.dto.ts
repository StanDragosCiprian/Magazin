import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClotheDto {
  //   @IsNumber()
  //   @IsNotEmpty()
  //   id: number;

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

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  @IsNotEmpty()
  style: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
