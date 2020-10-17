import React from 'react';
import ProductsHeader from './ProductsHeader';
import ProductsRows from './ProductsRows';

function Products() {
    let products = [
        { 
          name: 'Tiger Nixon', 
          description: 'System Architect', 
          price: 320800, 
          categories: ['Category 01','Category 02','Category 03'],
          colors: [{ name: 'Red', color: 'danger' }, { name: 'Blue', color: 'primary' }, { name: 'Green', color: 'success' }],
          stock: 245
        },
        { 
          name: 'Jane Doe', 
          description: 'Fullstack Developer', 
          price: 320800, 
          categories: ['Category 01','Category 02','Category 03'],
          colors: [{ name: 'Red', color: 'danger' }, { name: 'Blue', color: 'primary' }, { name: 'Green', color: 'success' }],
          stock: 245
        }
      ];
    return (
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <ProductsHeader />
                <ProductsRows products= {products}/>
                <ProductsHeader />
            </table>
        </div>
    );
}

export default Products;