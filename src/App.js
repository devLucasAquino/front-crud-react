import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className='inputContainer'>
        <TextField id="standard-basic" label="User" variant="standard" />
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>Gravar</Button>
          <Button>Alterar</Button>
          <Button>Deletar</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
