import { Genre } from './../enum/actor.enum';
export class CreateActorDto {
  id: string;

  name: string;

  age: number;

  genre: Genre;
}
