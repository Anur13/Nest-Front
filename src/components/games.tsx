import React, { useState, useEffect } from 'react';
import axios from "axios"

export const Games: React.FC = () => {

  const [games, setGames] = useState();

  useEffect(()=>{
    (async function getdata(){
      let data = await axios.get("https://new-back13.herokuapp.com/games/getAll");
      // setGames(data.data)
      console.log(data)
    })()
  },[])
  return (
    <>
    </>
  );
};
