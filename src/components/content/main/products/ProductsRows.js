import React from 'react';

function ProductsRows(props) {
    console.log(props);
  return (
    <tbody>
        {
            props.products.map((product, i) => {
                return (
                    <tr key={`${i}-product`}>
                        <td>{product.name}</td>
                        <td>{product.briefDescription}</td>
                        <td>${product.price}</td>
                        <td>{product.discount}</td>
                        <td>{product.stock}</td>
                    </tr>
                );
            })
        }
    </tbody>
  );
}

export default ProductsRows;