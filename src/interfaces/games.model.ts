export interface GamesModel {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      slug: string;
      name: string;
      released: string;
      rating: string;
      background_image: string;
    },
  ];
}
