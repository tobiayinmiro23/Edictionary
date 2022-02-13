import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import RandomWord from './RandomWord';


function App() {
  const [random,setrandom]=useState(false)
const [search,setsearch]=useState(true)
const SetRandom=(param)=>{
  setsearch(param)
}
const Setsearch=(param)=>{
  setsearch(param)
}
  return (
    <div style={{maxWidth:'60rem',margin:'auto',background:"white"}} className="App">
      {search ? <div>
        <Navigation random={SetRandom}/>
        <Home/>
      </div> : <div>
        <Navigation2 search={setsearch}/>
        <RandomWord/>
        </div>}
    </div>
  );
}

export default App;
