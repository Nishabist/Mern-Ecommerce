const Product = require('../model/product');

const getProductCategory = async (req, res) => {
    try {
        // Fetch distinct category names
        const productCategory = await Product.distinct("categoryName");

        // Initialize an object to store products by category
        const productsByCategory = {};

        // Fetch products for each category
        for (const categoryName of productCategory) {
            const products = await Product.find({ categoryName }).lean();
            productsByCategory[categoryName] = products;
        }

        res.status(200).json({
            categories: productsByCategory,
            success: true
        });
    } catch (error) {
        console.error("Error fetching product categories:", error);
        res.status(500).json({
            message: "Error fetching product categories",
            error: true,
            success: false
        });
    }
}


const categoryWiseProduct =async(req,res)=>{
    try {
        const { categoryName } = req.query; // Ensure we're using query parameters
        if (!categoryName) {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        // console.log(`Fetching products for category: ${categoryName}`);

        const products = await Product.find({ categoryName }).lean();
        // console.log(`Products found: ${products.length}`);

        res.status(200).json({
            data: products,
            message: "Products fetched successfully",
            success: true
        });
    } catch (error) {
        console.error("Error fetching products for category:", error);
        res.status(500).json({
            message: "Error fetching products for category",
            error: error.message,
            success: false
        });
    }

    // try {
    //     const {categoryName} = req?.body || req?.query
    //     const product = await Product.find({categoryName})
    //     res.json({
    //         data:product,
    //         message:"Product "
    //     })
        
    // } catch (error) {
    //     res.status(400).json({
    //         message:error.message
    //     })
        
    // }
    
}
const searchProduct = async (req, res) => {
    try {
        const productName = req.query.name;
        if (typeof productName !== 'string') {
            return res.status(400).json({ message: 'Invalid query parameter' });
        }
        
        const data = await Product.find({
            productName: { $regex: new RegExp(productName, 'i') }
        });

        res.json({ product: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct=async(req,res)=>{
    const id = req.body._id;
    const data= await Product.findByIdAndUpdate(id,req.body);
    if(data){
      res.json({msg: "product updated successfully"})
    }else{
      res.json({msg:'couldnot update product'});
    }
   }

const deleteProduct=async(req,res)=>{
    console.log(req.body)
    const data= await Product.findByIdAndDelete(req.body.id)
  
    if(data){
      res.json({msg: "product deleted successfully"})
    }
   }
  



module.exports = { getProductCategory,categoryWiseProduct ,searchProduct,updateProduct,deleteProduct};
