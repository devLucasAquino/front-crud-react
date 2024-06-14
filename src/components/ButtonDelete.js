import axios from 'axios';

function ButtonDelete(){

    function deletar(){
        axios.get('http://localhost:8080/pastelaria/lista')
          .then(function (resposta) {
            console.log('deletado com sucesso' + resposta.data)
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return(
            <button style={{backgroundColor: 'red'}} onClick={deletar}>DELETAR</button>
    )
}

export default ButtonDelete;