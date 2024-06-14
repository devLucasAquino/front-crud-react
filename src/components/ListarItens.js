function ListarItens({dados}){
    return(
    <div className="Lista">
      <h2>Sabores</h2>
      <ul>
        {dados.map(item => (
          <li key={item.id}>{item.sabor}</li>
        ))}
      </ul>
    </div>
    )
}

export default ListarItens;