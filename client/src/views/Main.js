import React, { useState } from 'react'
import axios from 'axios';


import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
const Main = (props) => {
    
   const [product, setProduct] = useState([]);


    return (
        <div>
    
           <ProductForm productForm={product} setProductForm={setProduct} />
            <hr/>
           <ProductList productList={product} setProductList={setProduct} />
        </div>
    )
}
export default Main;