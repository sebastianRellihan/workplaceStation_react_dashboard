import React from 'react';
import Cards from './Cards'

function Categories(props) {
    console.log(props);
    return (
    <>
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Cantidad de productos por categoría</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {props.productsCategories.map((category) => <Cards key={`${category.id}-categorie`} value={category}/>)}
                        {/* <Cards /> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Categories;