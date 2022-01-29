import React, { useState } from 'react';
import GameUI from './GameUI';

const words = [
  'depot',
  'depots',
  'despot',
  'dews',
  'does',
  'doest',
  'dope',
  'dopes',
  'dose',
  'dote',
  'dotes',
  'dots',
  'dowse',
  'dowset',
  'odes',
  'opted',
  'opts',
  'owed',
  'owes',
  'peso',
  'pest',
  'pesto',
  'pets',
  'pews',
  'pods',
  'poet',
  'poets',
  'pose',
  'posed',
  'post',
  'posted',
  'pots',
  'sowed',
  'sped',
  'spot',
  'step',
  'stew',
  'stop',
  'stow',
  'stowed',
  'swept',
  'swop',
  'swopt',
  'toed',
  'toes',
  'tops',
  'towed',
  'tows',
  'twos',
  'weds',
  'wept',
  'west',
  'wets',
  'woes',
];

const Game: React.FC = () => {
  const [bufferText, setBufferText] = useState('');
  const [isSpecialLetter, setIsSpecialLetter] = useState(false);
  const [foundWords, setFoundWords] = useState([]);

  const handleClick = (e) => {
    if (bufferText.length > 10) {
      setBufferText('Too Long!');
      setTimeout(() => {
        setBufferText('');
      }, 500);
    } else {
      setBufferText((prev) => prev + e.target.innerText);
    }
  };

  const handleCenterClick = (e) => {
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
    } else if (foundWords.includes(bufferText)) {
      setBufferText('Oops, already got that one!');
      setIsSpecialLetter(false);
      setTimeout(() => {
        setBufferText('');
      }, 500);
    } else {
      if (words.includes(bufferText.toLowerCase())) {
        setFoundWords([...foundWords, bufferText]);
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
