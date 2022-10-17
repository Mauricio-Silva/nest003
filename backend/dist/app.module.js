"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const movie_entity_1 = require("./movie/entities/movie.entity");
const actor_entity_1 = require("./actor/entities/actor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const movie_module_1 = require("./movie/movie.module");
const actor_module_1 = require("./actor/actor.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            movie_module_1.MovieModule,
            actor_module_1.ActorModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                port: 3306,
                host: 'localhost',
                username: 'root',
                password: 'admin',
                database: 'cinema',
                entities: [actor_entity_1.Actor, movie_entity_1.Movie],
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map