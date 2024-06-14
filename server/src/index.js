const express = require("express")
var cookieParser = require('cookie-parser')

const app = express()
const cors = require('cors')
require('dotenv').config()
const stripe=require ("stripe")("sk_test_51PRY2LP8HNsNUieM1uvUYGopF8ajAVKIapgRLD4bM7Hi3HXo0CzhWm9MxhqU4ytD5NaHStuaWdhw6qociSDfTHZV00jeU0SE4J")

const port = process.env.PORT 
const connection = require('./db/connection')
const userRouter = require('./routes/users')
const productRouter = require('./routes/product')
const categoryRouter=require('./routes/category')
connection()

app.use('/uploads', express.static('uploads'));
app.use(cors())
app.use(cookieParser())
app.use(userRouter)
app.use(productRouter)
app.use(categoryRouter)

app.post('/create-checkout-session',async(req,res)=>{
  const { cartItems } = req.body;

  console.log(cartItems);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cartItems.map(cartItem => {
      const item = cartItem.cartItems.data;
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.productName,
          },
          unit_amount: item.selling * 100, 
        },
        quantity: 1,
      };
    }),
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ id: session.id });
});

app.get('/user', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})