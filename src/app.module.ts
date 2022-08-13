import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GamesModule } from "./games/games.module";
import { HealthModule } from "./health/health.module";
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        PORT: Joi.string()
      }),
      envFilePath: `.env`,
      isGlobal: true
    }),
    GamesModule,
    HealthModule,
  ],
})
export class AppModule {}
