import React from 'react';
import ProductsHeader from './ProductsHeader';
import ProductsRows from './ProductsRows';

function Products(props) {
  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Tabla de productos</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                  <ProductsHeader />
                  <ProductsRows products= {props.products}/>
              </table>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Products;