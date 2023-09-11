import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  margin: 1rem 1rem;
  font-size: 3.75rem;
`;

const TextColor = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`;

const Button = styled.button`
  all: unset;
  border: 2px solid black;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  transition: transform 0.1s ease;
  color: black;
  &:hover {
    color: white;
    background-color: black;
  }
  &:active {
    transform: translateY(2px);
    background-color: white;
  }
`;

export { Button, Header, Main, TextColor };
