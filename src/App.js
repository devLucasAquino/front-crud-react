import ListarItens from './components/ListarItens';

import { useState } from 'react';


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

      <ListarItens currentSabor={sabor}/>

    </div>
  );
}

export default App;
