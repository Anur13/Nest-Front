import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GamesModel } from '../interfaces/games.model';
import axios from 'axios';
import { GameDetails } from '../components/GameDetails/GameDetails';

export const GamePage: React.FC = () => {
  const { slug } = useParams();
  const [gameData, setGameData] = useState<GamesModel>();

  useEffect(() => {
    (async function getData() {
      console.log(slug);
      const data = await axios.get(
        `https://new-back13.herokuapp.com/games/getBySlug?slug=${slug}`,
      );
      setGameData(data.data);
      console.log(data);
    })();
  }, [slug]);
  return (
    <div>
      {gameData && (
        <GameDetails
          count={gameData.count}
          next={gameData.next}
          previous={gameData.previous}
          results={gameData.results}
        />
      )}
    </div>
  );
};
