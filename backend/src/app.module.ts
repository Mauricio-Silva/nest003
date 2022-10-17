import { Movie } from './movie/entities/movie.entity';
import { Actor } from './actor/entities/actor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [
    MovieModule,
    ActorModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: 'admin',
      database: 'cinema',
      entities: [Actor, Movie],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
