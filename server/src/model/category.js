const mongoose=require('mongoose')
const { Schema } = mongoose;

const category = new Schema({
    categoryName: String, // String is shorthand for {type: String}
    

  
});

const Category = mongoose.model('Category', category);
module.exports = Category