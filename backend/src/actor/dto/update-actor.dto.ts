import { Genre } from './../enum/actor.enum';
import { IsAlpha, IsEnum, IsNumber } from 'class-validator';

export class UpdateActorDto {
  @IsAlpha()
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(Genre)
  genre: Genre;
}
