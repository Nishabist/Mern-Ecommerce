

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')
const Product = require('../model/product')
const {getProductCategory,categoryWiseProduct}=require('../controller/product')

// Multer configuration for file upload
const uploadsDirectory = path.join(__dirname,'..','..', 'uploads', 'image');
if (!fs.existsSync(uploadsDirectory)) {
  fs.mkdirSync(uploadsDirectory, { recursive: true });
}

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Upload product endpoint
router.post('/upload-product', upload.single('image'), async (req, res) => {
  try {
    const { productName, brandName, categoryName, description, price, selling } = req.body;
    req.body.image = req.file.filename;
      const productdetail = await Product.create(req.body);
    
    res.json({ success: true, message: 'Product uploaded successfully' });
  } catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).json({ success: false, message: 'Error uploading product' });
  }
});

// Get all products endpoint
router.get('/get-product', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});


router.get('/products/:_id',async(req,res)=>{
  const data=await Product.findById(req.params._id)
  if(data){
    res.json({productList:data})
  }
 })


// router.get("/products-image", async (req, res) => {
//   console.log(__dirname);
//   const productDetail = await Product.findById(req.query.productId);

//   if (productDetail?.image) {
//     const imgPath = path.join(
//       __dirname + "/../../uploads/image/",
//       productDetail.image
//     );
//     res.sendFile(imgPath);
//   } else {
//     const imgPath = path.join(
//       __dirname + "/../../uploads/image/"
      
//     );
//     res.sendFile(imgPath);
//   }
// });
router.get("/products-image", async (req, res) => {
  try {
    const productId = req.query.productId;
    const productDetail = await Product.findById(productId);

    if (productDetail && productDetail.image) {
      const imgPath = path.join(uploadsDirectory, productDetail.image);
      res.sendFile(imgPath);
    } else {
      res.status(404).send("Image not found");
    }
  } catch (error) {
    console.error('Error fetching product image:', error);
    res.status(500).json({ success: false, message: 'Error fetching product image' });
  }
});

router.get("/productcategory",getProductCategory)
router.post("/productbycategory",categoryWiseProduct)
router.get("/searchproduct",async(req,res) =>{

})

module.exports= router
