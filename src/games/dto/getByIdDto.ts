import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class getByIdDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: () => String, example: 'grand-theft-auto-v' })
  readonly slug: string;
}
