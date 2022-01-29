import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.div`
  display: flex;
  width: full;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  border: 2px solid black;
`;

export const GameContainer = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

export const SideColumn = styled(Column)`
  margin: 4rem 0;
`;

export const CenterColumn = styled(Column)`
  margin: 1rem 0;
`;

export const Circle = styled.div`
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
`;

export const CenterCircle = styled(Circle)`
  background: gold;
`;

export const InputText = styled.p`
  margin-bottom: 2rem;
  height: 3rem;
  width: 20rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const FoundText = styled.p`
  margin-left: 0.3rem;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-top: 10px solid black;
  position: relative;
  left: 50%;
  bottom: 100%;

  &:hover {
    cursor: pointer;
    border-top: 10px solid gray;
  }
`;

export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-bottom: 10px solid black;
  position: relative;
  left: 50%;
  bottom: 100%;

  &:hover {
    cursor: pointer;
    border-bottom: 10px solid gray;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  background-color: #bfbfbf;
  border: none;
  border-radius: 5px;
  margin: 1rem;
  font-weight: bold;
  font-size: 16px;
  height: 2.5rem;
  width: 7.5rem;
  box-shadow: 1px 1px 5px 0px rgba(156, 156, 156, 156);

  &:hover {
    cursor: pointer;
    background-color: #808080;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items; flex-start;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

export const Accordion = styled.div`
  height: 5rem;
  width: 20rem;
  padding: 0.2rem;
  margin-top: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-flow: column;
`;
