import ButtonAlterar from './components/ButtonAlterar';
import ButtonDelete from './components/ButtonDelete';
import ButtonGravar from './components/ButtonGravar';
import ListarItens from './components/ListarItens';

import axios from 'axios';

import { useState, useEffect } from 'react';


import './App.css';

function App() {

  const [ list, setList ] = useState([]);

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




  return (
    <div className="App">
      <div className='inputContainer'>
        <input className='inputElement' placeholder='Sabor do pastel'></input>
      </div>
      <div className='buttonContainer'>
        <ButtonGravar teste={listarDados}/>
        <ButtonAlterar />
        <ButtonDelete />
      </div>
      <ListarItens dados={list}/>
    </div>
  );
}

export default App;
