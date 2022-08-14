import {BadRequestException, Injectable} from "@nestjs/common";
import { ApiUtilService } from "../../utils/api-util.service";
import {GamesDTO} from "./dto/GamesDTO";

@Injectable()
export class GamesService {
  constructor(private readonly apiService: ApiUtilService) {}
  async findOneBySlug(slug: string): Promise<GamesDTO> {
    const { data } = await this.apiService.getBySlug(slug);
    if (data.results.length === 0) {
      throw new BadRequestException('No game found');
    }
    return data;
  }

  async findAll():Promise<GamesDTO> {
    const { data } = await this.apiService.getAll();
    return data;
  }
}
