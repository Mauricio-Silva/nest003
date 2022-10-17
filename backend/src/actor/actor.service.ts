import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private actorRepository: Repository<Actor>,
  ) {}

  async create(createActorDto: CreateActorDto): Promise<CreateActorDto> {
    try {
      await this.actorRepository.save(createActorDto);
      delete createActorDto.id;
      return createActorDto;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error in saving the actor in database',
      );
    }
  }

  async findAll(): Promise<Actor[]> {
    try {
      return await this.actorRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Impossible to find all actors');
    }
  }

  async findOneById(id: string): Promise<Actor> {
    const actor = this.actorRepository
      .createQueryBuilder('actor')
      .select(['actor.name', 'actor.age', 'actor.genre'])
      .where('actor.id = :id', { id: id })
      .getOne();
    if (!actor) throw new NotFoundException('Actor not found');
    return actor;
  }

  async findOneByName(name: string): Promise<Actor> {
    const actor = this.actorRepository
      .createQueryBuilder('actor')
      .select(['actor.name', 'actor.age', 'actor.genre'])
      .where('actor.name = :name', { name: name })
      .getOne();
    if (!actor) throw new NotFoundException('Actor not found');
    return actor;
  }

  async update(id: string, updateActorDto: UpdateActorDto): Promise<Actor> {
    const actor = await this.actorRepository.findOneBy({ id });
    const { name, age, genre } = updateActorDto;
    actor.name = name ? name : actor.name;
    actor.age = age ? age : actor.age;
    actor.genre = genre ? genre : actor.genre;
    try {
      await this.actorRepository.save(actor);
      return this.findOneById(id);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error in saving the actor in database',
      );
    }
  }

  async remove(id: string): Promise<string> {
    const result = await this.actorRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Not found an actor with the informed ID');
    }
    return 'The Actor was successfully Removed';
  }
}
