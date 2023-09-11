import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button, Header, Main, TextColor } from './AppStyled';

export default function App() {
  const [randomColorGenerator, setRandomColorGenerator] = useState('');

  return (
    <Main>
      <Header>React random color generator</Header>
      <div
        style={{
          backgroundColor: randomColorGenerator,
          width: '300px',
          height: '300px',
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
    </Main>
  );
}
