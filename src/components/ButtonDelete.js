import axios from 'axios';

import Trash from '../assets/img/trash.svg'

function ButtonDelete({ itemId, onDelete }){

    function handleDelete(){
        axios.delete(`http://localhost:8080/pastelaria/delete/${itemId}`)
          .then(function (resposta) {
            onDelete(itemId);
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return(
            <button id='ButtonDelete' onClick={handleDelete}>
              <img src={Trash} style={{width: '18px', height: '20px', padding: '1px'}}/>
            </button>
    )
}

export default ButtonDelete;