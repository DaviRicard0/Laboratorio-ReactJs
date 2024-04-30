import { useState } from 'react';
import './App.css';
import { Routes } from './routes';

function App() {
  const [currentRoute,setCurrentRoute] = useState("date-current");
  
  return (
    <>
      <nav>
        <ul>
          <li><a onClick={() => setCurrentRoute("date-current")}>Exercício 1</a></li>
          <li><a onClick={()=> setCurrentRoute("sign")}>Exercício 2</a></li>
        </ul>
      </nav>
      <Routes route={currentRoute}/>
    </>
  );
}

export default App;