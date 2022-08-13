import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { GamesModule } from "./games/games.module";
import { HealthModule } from "./health/health.module";
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
      }),
      envFilePath: `.env`,
      isGlobal: true
    }),
    GamesModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
