import React, { useState } from 'react';
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
  GameContainer,
  LeftSide,
} from './styled/Styles';

type Props = {
  handleClick: (e: any) => void;
  handleCenterClick: (e: any) => void;
  handleSubmit: () => void;
  handleClear: () => void;
  bufferText?: string;
  foundWords?: string[];
};

const GameUI = ({
  handleClick,
  handleCenterClick,
  bufferText,
  handleSubmit,
  handleClear,
  foundWords,
}: Props) => {
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
          <LeftSide>
            <InputText>{bufferText}</InputText>
            <GameContainer>
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
            </GameContainer>
            <ButtonContainer>
              <Button onClick={handleClear}>Clear</Button>
              <Button onClick={handleSubmit}>Enter</Button>
            </ButtonContainer>
          </LeftSide>
          <Accordion className={accordion}>
            {open === false
              ? foundWords
                  ?.filter((word: string, index: number) => index < 5)
                  .map((word: string) => {
                    return <FoundText>{`${word}, `}</FoundText>;
                  })
              : foundWords?.map((word: string) => {
                  return <FoundText>{`${word}, `}</FoundText>;
                })}
          </Accordion>
          <span onClick={toggle}>
            {open === true ? <TriangleUp /> : <TriangleDown />}
          </span>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default GameUI;
