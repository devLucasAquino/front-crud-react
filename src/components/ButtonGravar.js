import axios from 'axios';

function ButtonGravar({novoSabor, stateList}) {

      function gravar(sabor){
        axios.post('http://localhost:8080/pastelaria/inserir', { sabor : sabor} )
          .then(function (resposta) {
            stateList(resposta.data)
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return (
      <button className='buttonGravar' onClick={() => gravar(novoSabor)}>GRAVAR</button>
    );
  }

export default ButtonGravar;
