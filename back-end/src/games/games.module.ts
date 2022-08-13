import { Module } from "@nestjs/common";
import { GamesService } from "./games.service";
import { GamesController } from "./games.controller";
import { ApiUtilService } from "../../utils/api-util.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule],
  controllers: [GamesController],
  providers: [GamesService, ApiUtilService]
})
export class GamesModule {}
