import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Formulaire from './components/Formulaire';

function App() {
  const [number, setNumber] = useState("545645")
  const [name, setName] = useState("Farah")
  const [exp, setExp] = useState("11/23")
  
  return (
    <div className="App">
      <header className="App-header">

        <Formulaire nom={name} exp={exp} num={number}  setNumber={setNumber} setName={setName} setExp={setExp}/>
        <div className='line'></div>
        <Card nom={name} exp={exp} num={number}/>
      </header>
    </div>
  );
}

export default App;
