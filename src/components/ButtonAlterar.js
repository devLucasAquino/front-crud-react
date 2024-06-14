import axios from 'axios';

function ButtonAlterar(){

    function alterar(){
        axios.get('http://localhost:8080/pastelaria/lista')
          .then(function (resposta) {
            console.log('alterado com sucesso' + resposta.data)
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return(
            <button onClick={alterar}>ALTERAR</button>
    )
}

export default ButtonAlterar;