import './App.css';
import styled from 'styled-components'
import { useState } from 'react'

//Begin Style Components
const MainContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

`

const Game = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`

const SideColumn = styled(Column)`
  margin: 4rem 0;
`

const CenterColumn = styled(Column)`
  margin: 1rem 0;
`

const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }
`

const CenterCircle = styled(Circle)`
  background: gold;
`

const Text = styled.p`
  margin-bottom: 2rem;
  height: 3rem;
  width: 20rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`
const Found = styled.div`
  height: 6rem;
  width: 20rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

const Button = styled.button`
  text-decoration: none;
  background-color: gray;
  border: none;
  border-radius: 5px;
  margin: 1rem;
  font-weight: bold;
  font-size: 16px;
  height: 2.5rem;
  width: 7.5rem;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px gray;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items; flex-start;
  justify-content: flex-end;
  margin-bottom: 2rem;
`

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
  'woes'
]

//Game UI
function GameUi({ handleClick, handleCenterClick, bufferText, handleSubmit, handleClear, foundWords }) {

  return (
    <>
      <MainContainer>
        <SubContainer>
          <Found>
            {foundWords.map(word => {
              return <p>{`${word}, `}</p>
            })}
          </Found>
          <Text>
            {bufferText}
          </Text>
          <Game>
            <SideColumn>
              <Circle onClick={handleClick}>
                S
              </Circle>
              <Circle onClick={handleClick}>
                O
              </Circle>
            </SideColumn>
            <CenterColumn>
              <Circle onClick={handleClick}>
                W
              </Circle>
              <CenterCircle onClick={handleCenterClick}>
                D
              </CenterCircle>
              <Circle onClick={handleClick}>
                T
              </Circle>
            </CenterColumn>
            <SideColumn>
              <Circle onClick={handleClick}>
                E
              </Circle>
              <Circle onClick={handleClick}>
                P
              </Circle>
            </SideColumn>
          </Game>
          <ButtonContainer>
            <Button onClick={handleSubmit}>
              Enter
            </Button>
            <Button onClick={handleClear}>
              Clear
            </Button>
          </ButtonContainer>
          
        </SubContainer>
      </MainContainer>

    </>
  )
}


//Game Logic
function App() {

  const [bufferText, setBufferText] = useState('')
  const [isSpecialLetter, setIsSpecialLetter] = useState(false)
  const [foundWords, setFoundWords] = useState([])
  const [submitted, setSubmitted] = useState(false)

  function handleClick(e) {

    if(bufferText.length > 10) {
      setBufferText('Too Long!')
      setTimeout(() => {
        setBufferText('')
      }, 1000);
    } else {
      setBufferText(bufferText + e.target.innerText)
    }
  }

  function handleCenterClick(e) {
    setIsSpecialLetter(true)
    handleClick(e)
  }

  function handleClear() {
    setBufferText('')
  }

  function handleNotSubmit() {
    if(!submitted) {
      setBufferText('Sorry, not a word...')
      setTimeout(() => {
        setBufferText('')
      }, 1000);
    } else {
      setSubmitted(false)
    }
  }

  function handleSubmit() {
    if(bufferText.length < 4) {
      setBufferText('Too short!')
      setIsSpecialLetter(false)
      setTimeout(() => {
        setBufferText('')
      }, 1000);
    } else if(!isSpecialLetter) {
      setBufferText('Need to use letter of the day!')
      setTimeout(() => {
        setBufferText('')
      }, 1000);
    } else {
      foundWords.forEach(word => {
        if(bufferText === word.toUpperCase()) {
          setBufferText('Oops, already got that one!')
          setTimeout(() => {
            setBufferText('')
          }, 1000);
        }
      })
      words.forEach(word => {
        if(bufferText.toLowerCase() === word) { 
          setFoundWords([...foundWords, bufferText])      
          setSubmitted(true)
          setIsSpecialLetter(false)
          setBufferText('')
        } 
      })
    }   
    //handleNotSubmit() 
  }

  return (
    <GameUi handleClick={handleClick} 
            handleCenterClick={handleCenterClick}
            bufferText={bufferText} 
            handleClear={handleClear} 
            handleSubmit={handleSubmit} 
            foundWords={foundWords}
    />
  );
}

export default App;
