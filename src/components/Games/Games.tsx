import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GamesModel } from '../../interfaces/games.model';
import styles from './Games.module.scss';
import { Game } from './Game/Game';

export const Games: React.FC = () => {
  const [gamesData, setGamesData] = useState<GamesModel>();

  useEffect(() => {
    (async function getData() {
      const data = await axios.get(
        'https://new-back13.herokuapp.com/games/getAll',
      );
      setGamesData(data.data);
    })();
  }, []);

  console.log(gamesData);

  return (
    <div className={styles.gamesWrapper}>
      {gamesData?.results.map((item, i) => (
        <Game
          key={i}
          slug={item.slug}
          name={item.name}
          released={item.released}
          rating={item.rating}
          backgroundImage={item.background_image}
        />
      ))}
    </div>
  );
};
