import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get()
  showMessage(): string {
    return 'Here comes the Actor';
  }

  @Post()
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Get('/list')
  findAll() {
    return this.actorService.findAll();
  }

  @Get('/:id')
  findOneById(@Param('id') id: string) {
    return this.actorService.findOneById(id);
  }

  @Get('/name/:name')
  findOneByName(@Param('name') name: string) {
    return this.actorService.findOneByName(name);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(id, updateActorDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(id);
  }
}
