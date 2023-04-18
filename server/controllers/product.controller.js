const { model } = require('mongoose');
const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({ products: allDaProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateOneProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
        .then(deleteOneProduct => response.json(deleteOneProduct))
        .catch(err => response.json(err))
}