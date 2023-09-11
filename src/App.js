import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button, Header, Main, TextColor } from './AppStyled';

export default function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [randomColorGenerator, setRandomColorGenerator] = useState('');
  const [size, setSize] = useState('');
  return (
    <Main>
      <Header>React random color generator</Header>
      <div
        style={{
          backgroundColor: randomColorGenerator,
          width: size === '' ? '300px' : `${size}px`,
          height: size === '' ? '300px' : `${size}px`,
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '5px',
          marginBottom: '1rem',
        }}
      >
        <TextColor>
          Generated Color: <br />
          {randomColorGenerator}
        </TextColor>
      </div>
      <Button
        type="button"
        onClick={() => setRandomColorGenerator(randomColor())}
      >
        Generate
      </Button>
      <div>
        <input
          onChange={(event) => {
            const value = event.currentTarget.value;
            setHue(value);
            setRandomColorGenerator(
              randomColor({ luminosity: 'light', hue: hue }),
            );
          }}
        />
        <div>{randomColorGenerator}1</div>
        <input
          onChange={(event) => {
            const value = event.currentTarget.value;
            setLuminosity(value);
            setRandomColorGenerator(
              randomColor({ luminosity: luminosity, hue: hue }),
            );
          }}
        />
        <div>{randomColorGenerator}2</div>
        <input
          onChange={(event) => {
            const value = event.currentTarget.value;
            setSize(value);
          }}
        />
        <div>{size}3</div>
      </div>
    </Main>
  );
}
