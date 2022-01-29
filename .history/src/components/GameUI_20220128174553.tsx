import React, { useState } from 'react';
import styled from 'styled-components';
import Game from './Game';
import {
  MainContainer,
  SubContainer,
  Accordion,
  FoundText,
  TriangleUp,
  TriangleDown,
  InputText,
  SideColumn,
  Circle,
  CenterColumn,
  CenterCircle,
  ButtonContainer,
  Button,
} from './styled/Styles';

const GameUI = ({
  handleClick,
  handleCenterClick,
  bufferText,
  handleSubmit,
  handleClear,
  foundWords,
}) => {
  const [open, setOpen] = useState(false);
  const [accordion, setAccordion] = useState('');

  function toggle() {
    if (open) {
      setOpen(false);
      setAccordion('');
    } else {
      setOpen(true);
      setAccordion('found-word-box');
    }
  }

  return (
    <>
      <MainContainer>
        <SubContainer>
          <Accordion className={accordion}>
            {open === false
              ? foundWords
                  .filter((word, index) => index < 5)
                  .map((word) => {
                    return <FoundText>{`${word}, `}</FoundText>;
                  })
              : foundWords.map((word) => {
                  return <FoundText>{`${word}, `}</FoundText>;
                })}
          </Accordion>
          <span onClick={toggle}>
            {open === true ? <TriangleUp /> : <TriangleDown />}
          </span>
          <InputText>{bufferText}</InputText>
          <Game>
            <SideColumn>
              <Circle onClick={handleClick}>S</Circle>
              <Circle onClick={handleClick}>O</Circle>
            </SideColumn>
            <CenterColumn>
              <Circle onClick={handleClick}>W</Circle>
              <CenterCircle onClick={handleCenterClick}>D</CenterCircle>
              <Circle onClick={handleClick}>T</Circle>
            </CenterColumn>
            <SideColumn>
              <Circle onClick={handleClick}>E</Circle>
              <Circle onClick={handleClick}>P</Circle>
            </SideColumn>
          </Game>
          <ButtonContainer>
            <Button onClick={handleSubmit}>Enter</Button>
            <Button onClick={handleClear}>Clear</Button>
          </ButtonContainer>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default GameUI;
