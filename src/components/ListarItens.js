function ListarItens({dados}){
    return(
    <div className="Lista">
      <h2 style={{color: 'white'}}>Sabores</h2>
      <ul>
        {dados.map(item => (
          <li key={item.id} style={{color: 'white'}}>{item.sabor}</li>
        ))}
      </ul>
    </div>
    )
}

export default ListarItens;