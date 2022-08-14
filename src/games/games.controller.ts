import { Controller, Get, Query } from '@nestjs/common';
import { GamesService } from './games.service';
import { queryParamPipeLine } from './pipelines/queryParamValidationPipeline';
import { getByIdDto } from './dto/getByIdDto';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { GamesDTO } from './dto/GamesDTO';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/getBySlug?')
  @ApiOkResponse({
    description: 'Game was found',
    type: ()=> GamesDTO,
  })
  @ApiQuery({ name: 'slug' })
  async findOneByTitle(@Query(queryParamPipeLine) queryParams: getByIdDto) {
    return await this.gamesService.findOneBySlug(queryParams.slug);
  }

  @Get('getAll')
  @ApiOkResponse({
    description: 'Games were found',
    type: GamesDTO,
  })
  findAll() {
    return this.gamesService.findAll();
  }
}
