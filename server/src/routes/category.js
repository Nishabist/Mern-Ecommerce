const express = require('express')
var router = express.Router();

const{createCategory,getCategory,updateCategory,deleteCategory,editCategory}=require('../controller/category')
const Category=require('../model/category')
router.use(express.json());

router.post('/category',createCategory)

router.get('/category',getCategory)

 
 router.put('/category',updateCategory)

 router.delete('/category',deleteCategory)

 router.put('/category',editCategory)


module.exports=router