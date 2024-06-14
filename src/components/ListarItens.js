import axios from "axios";

import { useState, useEffect } from "react";

import ButtonDelete from "./ButtonDelete";

function ListarItens(){

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


    return(
    <div className="Lista">
      <h2 style={{color: 'white'}}>Sabores</h2>
      <ul>
        {list.map(item => (
          <div key={item.id} style={{color: 'white'}}>{item.sabor}
            <span>{item.sabor}</span>
            <ButtonDelete itemId={item.id} onDelete={handleDelete}/>
          
          </div>

        ))}
      </ul>
    </div>
    )
}

export default ListarItens;