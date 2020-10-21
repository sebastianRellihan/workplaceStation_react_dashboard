import React from 'react';
import Title from './Title';
import Cards from './cards/Cards';
import LastProductsCards from './cards/LastProductsCard';
import CategoriesCards from './cards/categories/CategoriesCards';
import Products from './products/Products'

function Main(props) {
  console.log(props);
  const cardsValues = [
    {
      name: 'Total de productos', 
      value: props.products.meta.count, 
      icon: 'fas fa-clipboard-list', 
      color: 'primary'
    },
    {
      name: 'Total de usuarios', 
      value: props.users.meta.count, 
      icon: 'fas fa-user-check', 
      color: 'warning'
    },
    {
      name: 'Total de categorías', 
      value: 38, 
      icon: 'fas fa-database', 
      color: 'info' 
    },
  ]
  return (
    <>
        <div className="container-fluid">
            
          <Title title='Workplace Station Dashboard'/>

          <div className="row">

            {cardsValues.map((value, i) => <Cards key={`${i}-value`} value={value}/>)}

          </div>

          <div className="row">
              
            <LastProductsCards />

            <CategoriesCards />

          </div>

          <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
          
          <div className="card shadow mb-4">
            <div className="card-body">
              
              <Products />

            </div>
          </div>

        </div>
    </>
  );
}

export default Main;