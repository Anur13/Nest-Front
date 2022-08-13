import { Injectable } from "@nestjs/common";
import { ApiUtilService } from "../../utils/api-util.service";

@Injectable()
export class GamesService {
  constructor(private readonly apiService: ApiUtilService) {}
  async findOneBySlug(slug: string) {
    const { data } = await this.apiService.getBySlug(slug);
    return data;
  }

  async findAll() {
    const { data } = await this.apiService.getAll();
    return data;
  }
}
