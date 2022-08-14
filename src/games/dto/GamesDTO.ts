import { ApiProperty } from '@nestjs/swagger';

export class GamesDTO {
  @ApiProperty({ example: '10', type: () => Number })
  count: number;

  @ApiProperty({
    type: () => String,
    example:
      'https://api.rawg.io/api/games?key=c370bfca42a841f498a0724a01750f38&page=2&page_size=20',
  })
  next: string;

  @ApiProperty({
    example:
      'https://api.rawg.io/api/games?key=c370bfca42a841f498a0724a01750f38&page=2&page_size=20',
    type: () => String,
  })
  previous: string;

  @ApiProperty({ type: () => ResultDto })
  results: [
    {
      slug: string;
      name: string;
      released: string;
      background_image: string;
      rating: number;
    },
  ];
}

class ResultDto {
  @ApiProperty({ example: 'grand-theft-auto-v', type: () => String })
  slug: string;

  @ApiProperty({
    type: () => String,
    example: 'Grand Theft Auto V',
  })
  name: string;

  @ApiProperty({
    type: () => String,
    example: '2013-09-17',
  })
  released: string;

  @ApiProperty({
    type: () => Number,
    example: '4.47',
  })
  rating: number;

  @ApiProperty({
    type: () => String,
    example: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
  })
  background_image: string;
}
