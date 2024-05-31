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
        const {categoryName} = req?.body || req?.query
        const product = await Product.find({categoryName})
        res.json({
            data:product,
            message:"Product "
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
        
    }
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


module.exports = { getProductCategory,categoryWiseProduct ,searchProduct};
