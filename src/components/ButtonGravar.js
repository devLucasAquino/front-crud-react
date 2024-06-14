import axios from 'axios';

function ButtonGravar({novoSabor}) {

    function gravar(sabor){
        axios.get('http://localhost:8080/pastelaria/inserir', { sabor : sabor} )
          .then(function (resposta) {
            console.log('gravado com sucesso' + resposta.data)
          })
          .catch(function (erro) {
            console.error('Erro ao listar dados:', erro);
          });
      }

    return (
      <button style={{backgroundColor: 'green'}} onClick={gravar(novoSabor)}>GRAVAR</button>
    );
  }

export default ButtonGravar;


// import React, { useState } from 'react';

// function MeuComponente() {
//     const [sabor, setSabor] = useState('');

//     function handleInputChange(event) {
//         setSabor(event.target.value);
//     }

//     function handleButtonClick() {
//         enviarSaborDoPastel(sabor);
//     }



//     return (
//         <div>
//             <input type="text" value={sabor} onChange={handleInputChange} />
//             <button onClick={handleButtonClick}>Inserir Pastel</button>
//         </div>
//     );
// }

// export default MeuComponente;

// import axios from 'axios';

// function enviarSaborDoPastel(sabor) {
//     axios.post('http://localhost:8080/inserir', { sabor: sabor })
//          .then(response => {
//              console.log('Pastel inserido com sucesso:', response.data);
//              // Faça o que for necessário com a resposta, como atualizar a lista de itens
//          })
//          .catch(error => {
//              console.error('Erro ao inserir pastel:', error);
//          });
// }