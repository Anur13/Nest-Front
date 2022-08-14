import React, { SyntheticEvent, useState } from 'react';
import styles from './SearchFrom.module.scss';
import { useNavigate } from 'react-router-dom';

export const SearchForm: React.FC = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function goToDetails() {
    navigate(`/${input}`);
  }
  return (
    <form onSubmit={goToDetails} className={styles.form}>
      <input onChange={handleInput}></input>
      <button>Search</button>
    </form>
  );
};
