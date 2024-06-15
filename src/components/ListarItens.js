import axios from "axios";

import { useState, useEffect } from "react";

import ButtonDelete from "./ButtonDelete";
import ButtonGravar from "./ButtonGravar";
import ButtonAlterar from "./ButtonAlterar";

function ListarItens( {currentSabor} ){

  const [ list, setList ] = useState([]);
 

    function handleDelete(itemId) {
      setList(list.filter(item => item.id !== itemId));
  }

  useEffect(() => {
    listarDados();
  }, []);

  function listarDados(){
    axios.get('http://localhost:8080/pastelaria/lista')
      .then(function (resposta) {
        setList(resposta.data)
      })
      .catch(function (erro) {
        console.error('Erro ao listar dados:', erro);
      });
  }

  function handleUpdate(itemId, updateSabor) {
    setList(list.map(item => (item.id === itemId ? { ...item, sabor: updateSabor } : item)));
}



    return(
      <>
      <ButtonGravar novoSabor={currentSabor} stateList={setList}/>
      <div className="Lista">
        <h2 style={{color: 'white'}}>Sabores</h2>
        <ul>
          {list.map(item => (
            <div key={item.id} style={{color: 'white'}}>
              <span>{item.sabor}</span>
            <ButtonDelete itemId={item.id} onDelete={handleDelete}/>
            <ButtonAlterar itemId={item.id} updateSabor={currentSabor} onUpdate={handleUpdate} updateList={setList}/>
              </div>

          ))}
        </ul>
      </div>
    </>
    )
}

export default ListarItens;