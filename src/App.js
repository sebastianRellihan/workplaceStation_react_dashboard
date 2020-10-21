import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: "",
      users: ""
    }
  }

  componentDidMount () {
    let productsFetch = fetch('http://localhost:3000/api/products');
    let usersFetch = fetch('http://localhost:3000/api/users');

    Promise.all([productsFetch, usersFetch])
      .then(res => {
        let resJSON = Promise.all(res.map(r => r.json()));
        return resJSON
      })
      .then(
        res => {
          this.setState({
            isLoaded: true,
            products: res[0],
            users: res[1]
          })
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render () {
    console.log('Render method');
    const { error, isLoaded, products, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="wrapper">

          <Sidebar />
      
          <Content 
          
            products={products}

            users={users}
            
          />

        </div>
      );
    }
  };
  
}

export default App;
