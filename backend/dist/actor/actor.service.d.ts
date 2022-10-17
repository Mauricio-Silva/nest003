import { Repository } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';
export declare class ActorService {
    private actorRepository;
    constructor(actorRepository: Repository<Actor>);
    create(createActorDto: CreateActorDto): Promise<CreateActorDto>;
    findAll(): Promise<Actor[]>;
    findOneById(id: string): Promise<Actor>;
    findOneByName(name: string): Promise<Actor>;
    update(id: string, updateActorDto: UpdateActorDto): Promise<Actor>;
    remove(id: string): Promise<string>;
}
