import ButtonAlterar from './components/ButtonAlterar';
import ButtonDelete from './components/ButtonDelete';
import ButtonGravar from './components/ButtonGravar';
import ListarItens from './components/ListarItens';

import axios from 'axios';

import { useState, useEffect } from 'react';


import './App.css';

function App() {

  const [ list, setList ] = useState([]);
  const [ sabor, setSabor ] = useState('');

  useEffect(() => {
    listarDados();
  }, []);

  function listarDados(){
    axios.get('http://localhost:8080/pastelaria/lista')
      .then(function (resposta) {
        console.log(resposta)
        setList(resposta.data)
      })
      .catch(function (erro) {
        console.error('Erro ao listar dados:', erro);
      });
  }

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
        <ButtonGravar novoSabor={sabor}/>
        <ButtonAlterar/>
        <ButtonDelete />
      </div>

      <ListarItens dados={list}/>

    </div>
  );
}

export default App;
