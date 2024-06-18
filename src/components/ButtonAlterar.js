import axios from 'axios';

import Pen from '../assets/img/pen.svg'

function ButtonAlterar({itemId, updateSabor, onUpdate, updateList}){

    function alterar(){

      if (!updateSabor) {
        console.error("Sabor não pode estar vazio");
        return;
    }
      axios.put(`http://localhost:8080/pastelaria/update/${itemId}/${updateSabor}`)
        .then(function (resposta) {
          onUpdate(itemId, updateSabor);
          updateList(resposta.data)
        })
        .catch(function (erro) {
          console.error('Erro ao listar dados:', erro);
        });
    }

    return(
            <button id='ButtonUpdate' onClick={alterar}>
              <img src={Pen} style={{width: '18px', height: '20px', padding: '1px'}}/>
            </button>
    )
}

export default ButtonAlterar;