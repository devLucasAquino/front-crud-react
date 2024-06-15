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

        {list.length !== 0 ? <h2 style={{color: 'white'}}>Sabores</h2>
              : <h2></h2>}
        
        <ul>
          {list.map(item => (
            <div className="linhaDeRegistro" key={item.id} style={{color: 'white'}}>
              <span>{item.sabor}</span>
              <div className="buttonContainer">
                <ButtonAlterar itemId={item.id} updateSabor={currentSabor} onUpdate={handleUpdate} updateList={setList}/>
                <ButtonDelete itemId={item.id} onDelete={handleDelete}/>
              </div>
              </div>

          ))}
        </ul>
      </div>
    </>
    )
}

export default ListarItens;