import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const navigate = useNavigate();



    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
               setTitle(res.data.title);
               setPrice(res.data.price);
               setDescription(res.data.description);


            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/edit/' + id, {
            title,    
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/"); //takes us to the main page
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={updateProduct}  className="container text-center">
            <h1>Edit  Product</h1>
            <div className="form-group"> 
                <p>
                    <label>Title</label><br />
                    <input 
                    className="form-control form-control-sm"
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input 
                    className="form-control form-control-sm"
                    type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input 
                    className="form-control form-control-sm"
                    type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input className="btn btn-primary" type="submit" />
               </div>
            </form>
        </div>
    )
}
export default Update;