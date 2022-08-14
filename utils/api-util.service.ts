import axios from 'axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiUtilService {
  private readonly API_KEY: string;

  constructor(private readonly configService: ConfigService) {
    this.API_KEY = configService.get('API_KEY');
  }

  async getAll() {
    try {
      return await axios.get(`https://api.rawg.io/api/games?key=${this.API_KEY}&page_size=20`);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async getBySlug(slug: string) {
    try {
      return await axios.get(
        `https://api.rawg.io/api/games?key=${this.API_KEY}&search=${slug}&page_size=1`,
      );
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
