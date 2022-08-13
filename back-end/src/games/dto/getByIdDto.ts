import { IsNotEmpty, IsString } from "class-validator";

export class getByIdDto {
  @IsString()
  @IsNotEmpty()
  readonly slug: string;
}
