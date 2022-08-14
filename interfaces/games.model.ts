
export interface GamesModel {
  count: number;
  next: string;
  previous: string;
  result: [
    {
    slug: string;
      name: string
      released: string;
      rating: string;
      background_image:string;
  }]
}
