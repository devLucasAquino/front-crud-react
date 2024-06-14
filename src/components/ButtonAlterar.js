import axios from 'axios';

function ButtonAlterar({updateSabor}){

    function alterar(sabor){
      axios.get('http://localhost:8080/pastelaria/lista', {sabor : sabor})
        .then(function (resposta) {
          console.log('alterado com sucesso' + resposta.data)
        })
        .catch(function (erro) {
          console.error('Erro ao listar dados:', erro);
        });
    }

    return(
            <button onClick={alterar(updateSabor)}>ALTERAR</button>
    )
}

export default ButtonAlterar;