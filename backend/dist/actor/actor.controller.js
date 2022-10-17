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
exports.ActorController = void 0;
const common_1 = require("@nestjs/common");
const actor_service_1 = require("./actor.service");
const create_actor_dto_1 = require("./dto/create-actor.dto");
const update_actor_dto_1 = require("./dto/update-actor.dto");
let ActorController = class ActorController {
    constructor(actorService) {
        this.actorService = actorService;
    }
    showMessage() {
        return 'Here comes the Actor';
    }
    create(createActorDto) {
        return this.actorService.create(createActorDto);
    }
    findAll() {
        return this.actorService.findAll();
    }
    findOneById(id) {
        return this.actorService.findOneById(id);
    }
    findOneByName(name) {
        return this.actorService.findOneByName(name);
    }
    update(id, updateActorDto) {
        return this.actorService.update(id, updateActorDto);
    }
    remove(id) {
        return this.actorService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ActorController.prototype, "showMessage", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_actor_dto_1.CreateActorDto]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "findOneByName", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_actor_dto_1.UpdateActorDto]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "remove", null);
ActorController = __decorate([
    (0, common_1.Controller)('actor'),
    __metadata("design:paramtypes", [actor_service_1.ActorService])
], ActorController);
exports.ActorController = ActorController;
//# sourceMappingURL=actor.controller.js.map