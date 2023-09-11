import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [randomColorGenerator, setRandomColorGenerator] = useState('');
  return (
    <div className="App">
      <header>React random color generator</header>
      <div style={{ backgroundColor: randomColorGenerator }}>
        Generated Color: {randomColorGenerator}
      </div>
      <button
        type="button"
        onClick={() => setRandomColorGenerator(randomColor())}
      >
        Generate
      </button>
    </div>
  );
}
