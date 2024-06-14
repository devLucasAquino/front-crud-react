import ButtonAlterar from './components/ButtonAlterar';
import ButtonDelete from './components/ButtonDelete';
import ButtonGravar from './components/ButtonGravar';
import ListarItens from './components/ListarItens';

import axios from 'axios';

import { useState, useEffect } from 'react';


import './App.css';

function App() {

  
  const [ sabor, setSabor ] = useState('');

  function handleInputChange(event){
    setSabor(event.target.value);
  }

  return (
    <div className="App">
      <div className='inputContainer'>
        <input 
          value={sabor}
          type='text'
          onChange={handleInputChange}>
        </input>
      </div>
      <div className='buttonContainer'>
        
        {/* <ButtonAlterar/> */}
      </div>

      <ListarItens currentSabor={sabor}/>

    </div>
  );
}

export default App;
