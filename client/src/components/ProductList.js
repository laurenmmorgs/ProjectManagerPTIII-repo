import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ProductList = (props) => {
   
   
   const { productList, setProductList} = props;


   
   useEffect(() => {
      axios.get('http://localhost:8000/api/allProducts')
      .then((response) => {
         console.log("THIS IT THE RESPONSE!" , response.data.products);
         setProductList(response.data.products)
      })
      .catch((err) => {
         console.log(err);
      })
   }, [])


const deleteHandler = (id) => {
   console.log(id);
   axios.delete(`http://localhost:8000/api/delete/${id}`)
       .then((res) => {
           console.log(res);
           const updatedProductList = productList.filter((product) => product._id !== id)
           setProductList(updatedProductList)
       })
       .catch((err) => {
           console.log(err);
       })
}


  return (
     <div className=' border row'>
        <h1 className='text-center'> Products </h1>

            {
               productList.map((product, index) =>
                  <div key={index}  className='d-flex justify-content-evenly align-items-center border p-2 mb-2 '>
                     <Link className='link link-primary' to={`/${product._id}`}>{product.title}</Link>
                     
                     <Link className='btn btn-secondary btn-sm' to={`/edit/${product._id}`}>Edit</Link>
                     <button className='btn btn-danger btn-sm' onClick={(e)=>{deleteHandler(product._id)}}>Delete</button>
                  </div>
               )
            }

   </div>
    )
}


export default ProductList;