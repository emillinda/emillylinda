import { Component } from 'react';

class ListaFilmes extends Component {
  state = {
    lista: []
  }
  componentDidMount() {
    fetch('https://www.bocaweb.com.br/apibocaweb?nome=filme')
      .then(response => response.json())
      .then(lista => this.setState({ lista }))
  }
  render() {
    const { listas } = this.state;
    return (
      <div className="App">
        {listas.map(lista =>(
          <div key={lista._id}>
            <h1> {lista.nome} </h1> 
            <a href='/profile/[id]'> Sinopse </a>
          </div>
        ))}
      </div>
    );
  }
}

export default ListaFilmes;