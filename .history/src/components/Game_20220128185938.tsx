import React, { useEffect, useState } from 'react';
// import { words } from '../constants/words';
import GameUI from './GameUI';

const Game = () => {
  const [bufferText, setBufferText] = useState('');
  const [isSpecialLetter, setIsSpecialLetter] = useState(false);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>(['hello']);

  useEffect(() => {
    const index = Math.floor(Math.random() * 2);
    console.log(index);
  }, []);

  const handleClick = (e: any) => {
    if (bufferText.length > 10) {
      setBufferText('Too Long!');
      setTimeout(() => {
        setBufferText('');
      }, 500);
    } else {
      setBufferText((prev) => prev + e.target.innerText);
    }
  };

  const handleCenterClick = (e: string) => {
    setIsSpecialLetter(true);
    handleClick(e);
  };

  const handleClear = () => {
    setBufferText('');
  };

  const handleSubmit = () => {
    if (bufferText.length < 4) {
      setBufferText('Too short!');
      setIsSpecialLetter(false);
      setTimeout(() => {
        setBufferText('');
      }, 500);
    } else if (!isSpecialLetter) {
      setBufferText('Need to use letter of the day!');
      setTimeout(() => {
        setBufferText('');
      }, 500);
    } else if (foundWords?.includes(bufferText)) {
      setBufferText('Oops, already got that one!');
      setIsSpecialLetter(false);
      setTimeout(() => {
        setBufferText('');
      }, 500);
    } else {
      if (words.includes(bufferText.toLowerCase())) {
        setFoundWords((prev) => [...prev, bufferText]);
        setIsSpecialLetter(false);
        setBufferText('');
      } else {
        setBufferText('Sorry, not a word...');
        setIsSpecialLetter(false);
        setTimeout(() => {
          setBufferText('');
        }, 500);
      }
    }
  };

  return (
    <GameUI
      handleClick={handleClick}
      handleCenterClick={handleCenterClick}
      bufferText={bufferText}
      handleClear={handleClear}
      handleSubmit={handleSubmit}
      foundWords={foundWords}
    />
  );
};

export default Game;
