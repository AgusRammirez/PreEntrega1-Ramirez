import React from 'react';
import Item from './Item';

const ProductList = ({products}) => {
  return (
    <div>
        {products.map(product => (
          <Item key={product.id} product={product}/>
        ))}
    </div> 
  )
}

export default ProductList