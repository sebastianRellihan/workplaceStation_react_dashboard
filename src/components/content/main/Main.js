import React from 'react';
import Title from './Title';
import Cards from './cards/Cards';
import LastProductsCards from './cards/LastProductsCard';
import CategoriesCards from './cards/categories/CategoriesCards';
import Products from './products/Products'

function Main() {
  const values = [
    {
      name: 'Products in Data Base', 
      value: 135, 
      icon: 'fas fa-clipboard-list', 
      color: 'primary'
    },
    {
      name: 'Amount in products', 
      value: '$546.456', 
      icon: 'fas fa-dollar-sign', 
      color: 'success' 
    },
    {
      name: 'Users quantity', 
      value: 38, 
      icon: 'fas fa-user-check', 
      color: 'warning' 
    },
  ]
  return (
    <>
        <div className="container-fluid">
            
          <Title title=''/>

          <div className="row">

            {values.map((value, i) => <Cards key={`${i}-value`} value={value}/>)}

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