import React from 'react';
import Title from './Title';
import Cards from './cards/Cards';
import LastProductsCards from './cards/LastProductsCard';
import CategoriesInDataBase from './cards/categories/CategoriesInDataBase';
import Products from './products/Products'

function Main(props) {
  const cardsValues = [
    {
      name: 'Total de productos', 
      value: props.products.meta.count, 
      icon: 'fas fa-clipboard-list', 
      color: 'primary'
    },
    {
      name: 'Total de categorías', 
      value: props.products.meta.categories.length, 
      icon: 'fas fa-layer-group', 
      color: 'info' 
    },
    {
      name: 'Total de usuarios', 
      value: props.users.meta.count, 
      icon: 'fas fa-user-check', 
      color: 'warning'
    },
    {
      name: 'Total de ventas', 
      value: props.purchases.meta.count, 
      icon: 'fas fa-handshake', 
      color: 'success'
    },
    {
      name: 'Total de productos vendidos', 
      value: props.purchases.meta.totalSales, 
      icon: 'fas fa-shopping-cart', 
      color: 'primary'
    },
    {
      name: 'Ingreso acumulado en ventas', 
      value: props.purchases.meta.totalRevenue, 
      icon: 'fas fa-dollar-sign', 
      color: 'success'
    }
  ]
  return (
    <>
        <div className="container-fluid">
            
          <Title title='Workplace Station Dashboard'/>

          <div className="row">

            {cardsValues.map((value, i) => <Cards key={`${i}-value`} value={value}/>)}

          </div>

          <div className="row">
              
            <LastProductsCards lastProduct={props.products.meta.lastProduct}/>

            <CategoriesInDataBase productsCategories={props.products.meta.categories}/>

          </div>

          <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
          
          <div className="card shadow mb-4">
            <div className="card-body">
              
              <Products products={props.products.data}/>

            </div>
          </div>

        </div>
    </>
  );
}

export default Main;