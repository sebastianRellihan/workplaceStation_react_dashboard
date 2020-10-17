import React from 'react';

function ProductsRows(props) {
  return (
    <tbody>
        {
            props.products.map((product, i) => {
                return (
                    <tr key={`${i}-product`}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                            <ul>
                                {
                                    product.categories.map((category, i) => {
                                        return (
                                        <li key={`${i}-category`}>{category}</li>
                                        )
                                    })
                                }
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {
                                    product.colors.map((color, i) => {
                                        return (
                                            <li key={`${i}-color`}><span className={`text-${color.color}`}>{color.name}</span></li>
                                        )
                                    })
                                }
                            </ul>
                        </td>
                        <td>{product.stock}</td>
                    </tr>
                );
            })
        }
    </tbody>
  );
}

export default ProductsRows;