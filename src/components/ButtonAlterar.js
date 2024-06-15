import axios from 'axios';

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
            <button style={{backgroundColor: 'orange'}} onClick={alterar}>ALTERAR</button>
    )
}

export default ButtonAlterar;