"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const actor_entity_1 = require("./entities/actor.entity");
let ActorService = class ActorService {
    constructor(actorRepository) {
        this.actorRepository = actorRepository;
    }
    async create(createActorDto) {
        try {
            await this.actorRepository.save(createActorDto);
            delete createActorDto.id;
            return createActorDto;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error in saving the actor in database');
        }
    }
    async findAll() {
        try {
            return await this.actorRepository.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Impossible to find all actors');
        }
    }
    async findOneById(id) {
        const actor = this.actorRepository
            .createQueryBuilder('actor')
            .select(['actor.name', 'actor.age', 'actor.genre'])
            .where('actor.id = :id', { id: id })
            .getOne();
        if (!actor)
            throw new common_1.NotFoundException('Actor not found');
        return actor;
    }
    async findOneByName(name) {
        const actor = this.actorRepository
            .createQueryBuilder('actor')
            .select(['actor.name', 'actor.age', 'actor.genre'])
            .where('actor.name = :name', { name: name })
            .getOne();
        if (!actor)
            throw new common_1.NotFoundException('Actor not found');
        return actor;
    }
    async update(id, updateActorDto) {
        const actor = await this.actorRepository.findOneBy({ id });
        const { name, age, genre } = updateActorDto;
        actor.name = name ? name : actor.name;
        actor.age = age ? age : actor.age;
        actor.genre = genre ? genre : actor.genre;
        try {
            await this.actorRepository.save(actor);
            return this.findOneById(id);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error in saving the actor in database');
        }
    }
    async remove(id) {
        const result = await this.actorRepository.delete({ id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Not found an actor with the informed ID');
        }
        return 'The Actor was successfully Removed';
    }
};
ActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(actor_entity_1.Actor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActorService);
exports.ActorService = ActorService;
//# sourceMappingURL=actor.service.js.map