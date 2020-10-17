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
    // Fetch productos
    fetch('http://localhost:3000/api/products')
      .then(res => {
        return res.json();
      })
      .then(
        (products) => {
          this.setState({
            isLoaded: true,
            products: products
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

      // Fetch usuarios
      fetch('http://localhost:3000/api/users')
        .then(res => {
          return res.json();
        })
        .then(
          (users) => {
            this.setState({
              isLoaded: true,
              users: users
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
    const { error, isLoaded, products, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="wrapper">

          <Sidebar />
      
          <Content />
      
        </div>
      );
    }
  };
  
}

export default App;
