import { useState } from 'react';
import Magic8Ball from "./components/Magic8Ball.jsx";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Magic8Ball />
    </div>
  );
}

export default App;
