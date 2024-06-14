import axios from 'axios';

function ButtonGravar() {

    function gravar(){
        axios.get('http://localhost:8080/pastelaria/lista')
          .then(function (resposta) {
            console.log('gravado com sucesso' + resposta.data)
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return (
      <button onClick={gravar}>GRAVAR</button>
    );
  }

export default ButtonGravar;