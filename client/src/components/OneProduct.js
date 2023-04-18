import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams , Link } from 'react-router-dom'



const OneProduct = (props) => {


   const [product, setProduct] = useState({})
    const {id} = useParams()
    console.log(id);


   useEffect(() => {
      axios.get("http://localhost:8000/api/" + id)
          .then((res) => {
              console.log(res.data);
              setProduct(res.data.product)
          })
          .catch((err) => {
              console.log(err);
          })
  },[])
  
  const deleteHandler = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log(res);
            const updatedProductList = product.filter((product) => product._id !== id)
            setProduct(updatedProductList)
        })
        .catch((err) => {
            console.log(err);
        })
 }
 
  return (
   <div className='container text-center'>
     <div className="form-group">
      <p> Title: {product.title} </p>
      <p> Price: {product.price} </p>
      <p> Description: {product.description} </p>
      <Link className='btn btn-danger btn-sm' onClick={(e)=>{deleteHandler(product._id)}} to='/' >Delete</Link>
   </div>
     </div>
    )
}


export default OneProduct;