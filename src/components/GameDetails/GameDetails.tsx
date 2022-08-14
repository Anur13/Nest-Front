import React from 'react';
import { GamesModel } from '../../interfaces/games.model';

export const GameDetails: React.FC<GamesModel> = ({
  count,
  next,
  previous,
  results,
}: GamesModel) => {
  const data = results[0];
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.background_image} />
    </div>
  );
};
