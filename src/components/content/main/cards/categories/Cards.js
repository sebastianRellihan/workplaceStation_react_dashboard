import React from 'react';

function Cards(props) {
  console.log(props);
  return (
    <>
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
            <div className="card-body">
              <h6>{props.value.id}. {props.value.name}:</h6>
              <br></br>
              <p className="text-center text-dark"><strong>{props.value.productsAmount}</strong></p>
            </div>
            </div>
        </div>
    </>
  );
}

export default Cards;