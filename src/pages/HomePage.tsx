import { Games } from '../components/Games/Games';
import React from 'react';
import { SearchForm } from '../components/SearchForm/SearchForm';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Welcome to game reviews</h1>
      <SearchForm />
      <Games />
    </>
  );
};
