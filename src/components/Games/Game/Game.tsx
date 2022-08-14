import React from 'react';
import { GamePropsModel } from '../../../interfaces/gameProps.model';
import styles from './Game.module.scss';
import { useNavigate } from 'react-router-dom';
export const Game: React.FC<GamePropsModel> = ({
  slug,
  name,
  released,
  rating,
  backgroundImage,
}: GamePropsModel) => {
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/${slug}`);
  }
  return (
    <div onClick={goToDetails} className={styles.gameWrapper}>
      <p className={styles.gameTitle}>{name}</p>
      <img
        className={styles.gamePoster}
        src={backgroundImage}
        alt="game poster"
      />
      <div className={styles.textWrapper}>
        <p>Released - {released}</p>
        <p>Rating - {rating}</p>
      </div>
    </div>
  );
};
