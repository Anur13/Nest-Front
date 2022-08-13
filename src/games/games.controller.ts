import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { GamesService } from "./games.service";
import { queryParamPipeLine } from "./pipelines/queryParamValidationPipeline";
import { getByIdDto } from "./dto/getByIdDto";

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/getBySlug?')
  async findOneByTitle(@Query(queryParamPipeLine) queryParams: getByIdDto) {
    const res = await this.gamesService.findOneBySlug(queryParams.slug);
    if (res.results.length === 0) {
      throw new BadRequestException('No game found');
    }
    return res;
  }

  @Get('getAll')
  findAll() {
    return this.gamesService.findAll();
  }
}
