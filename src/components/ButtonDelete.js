import axios from 'axios';

function ButtonDelete({ itemId, onDelete }){

    function handleDelete(){
        axios.delete(`http://localhost:8080/pastelaria/delete/${itemId}`)
          .then(function (resposta) {
            console.log('deletado com sucesso' + resposta.data);
            onDelete(itemId);
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return(
            <button style={{backgroundColor: 'red'}} onClick={handleDelete}>D</button>
    )
}

export default ButtonDelete;