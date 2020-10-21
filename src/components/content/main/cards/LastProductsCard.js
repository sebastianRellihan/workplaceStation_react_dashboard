import React from 'react';

function Products(props) {
    console.log(props);
    return (
    <>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Último producto cargado</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={`http://localhost:3000${props.lastProduct.product.images[0].url}`} alt="image dummy" />
                    </div>
                    <h4>{props.lastProduct.product.name}</h4>
                    <p>{props.lastProduct.product.description}</p>
                    <a target="_blank" rel="nofollow" href={`http://localhost:3000${props.lastProduct.location}`}>View product detail</a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Products;