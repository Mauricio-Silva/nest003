import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
export declare class ActorController {
    private readonly actorService;
    constructor(actorService: ActorService);
    showMessage(): string;
    create(createActorDto: CreateActorDto): Promise<CreateActorDto>;
    findAll(): Promise<import("./entities/actor.entity").Actor[]>;
    findOneById(id: string): Promise<import("./entities/actor.entity").Actor>;
    findOneByName(name: string): Promise<import("./entities/actor.entity").Actor>;
    update(id: string, updateActorDto: UpdateActorDto): Promise<import("./entities/actor.entity").Actor>;
    remove(id: string): Promise<string>;
}
