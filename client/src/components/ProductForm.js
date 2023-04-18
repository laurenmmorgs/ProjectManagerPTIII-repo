import React, { useState } from "react";
import axios from "axios";


const ProductForm = (props) => {
  //keep track of what is being typed via useState hook

  const { productForm, setProductForm } = props;

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  //errors
  const [errors, setErrors] = useState({});

  //change handler
  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // setErrors(e.response.data.errors);
  };

  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new product
    axios
      .post("http://localhost:8000/api/product", product)
      .then((res) => {
        console.log("post data", res); // always console log to get used to tracking your data!
        console.log(res.data);

        setProductForm([...productForm, res.data]);
      })
      .catch((err) =>{
       console.log(err);
      setErrors(err.response.data.errors);
      })
  };

  return (
    <form onSubmit={onSubmitHandler}  className="container text-center">
      <div className="form-group">
        <p>
          <label>Title</label>
          <br />
          {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                  value (what's typed into the input) to our updated state   */}
          <input
            className="form-control form-control-sm"
            type="text"
            name="title"
            value={product.title}
            onChange={changeHandler}
            />
            {errors.title ? (
              <p className="text-danger"> {errors.title.message} </p>
            ) : null}
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            className ="form-control form-control-sm"
            type="text"
            name="price"
            value={product.price}
            onChange={changeHandler}
            />
            {errors.price ? (
              <p className="text-danger"> {errors.price.message} </p>
            ) : null}
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            className ="form-control form-control-sm"
            type="text"
            name="description"
            value={product.description}
            onChange={changeHandler}
            />
            {errors.description ? (
              <p className="text-danger"> {errors.description.message} </p>
            ) : null}
        </p>
      </div>
      <input className="btn btn-primary" type="submit" />
    </form>
  );
};
export default ProductForm;
