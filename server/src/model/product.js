const mongoose = require('mongoose')

const productSchema  = new mongoose.Schema({
    productName:String,
    brandName: String,
    categoryName: String,
    description:String,  
    image:[String],
    price:String,
    selling:String,

}
)


const Product = mongoose.model("Product",productSchema);

module.exports = Product
