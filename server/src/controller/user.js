const express = require('express')
const router = express.Router();
const User = require('../model/users')
router.use(express.json())
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


const registerUser=async(req,res)=>{
    try{
       
       const userExist = await User.findOne({phoneNumber : req.body.phoneNumber})
       
       if(userExist){
         
          res.status(409).json({msg :'Phone Number already taken!'})
       }
       else{
          const hashpassword=await bcrypt.hash(req.body.password,saltRounds)
          req.body.password=hashpassword
          const data = await User.create(req.body);
          if(data) res.json({msg :"User registered sucessfully"})
          console.log(req.body)
       }
    }
      catch(err){
       res.json(err)
      } 
      const payload = {
       ...req.body,
       role :"GENERAL",
       
      }
       
    }


    const loginUser=async(req,res)=>{
        //check if phone number exists
   const userDetail = await User.findOne({phoneNumber : req.body.phoneNumber}).lean()
   
   
   if(!userDetail){
      res.status(401).json({msg:'Invalid User'})
      
   }else{
      const isMatched = await bcrypt.compare(req.body.password ,userDetail.password)
      
           
     
      if(isMatched){
         const{password, ...userInfo}=userDetail
        
         const token = jwt.sign({phoneNumber:req.body.phoneNumber},process.env.SECRET_KEY)
         res.json({msg :"login sucess",token,userDetail:userInfo})
      }else{
         res.json({msg:"wrong password"})
      }
   }}


   const reSentEmail = (req,res)=>{
      var email = req.body.email; // you had the user enter their email
      User.findByEmail(email, function(err, user){
          user.token = new Token(); // some library to create a token
          mail(user.email, 'Please visit http://example.com/reset-password/' + user.token); 
      });
   }

   const forgetpassword=async(req,res)=>{
      const { email } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const resetToken = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    // Save the reset token to the user or to a token store
    // user.resetToken = resetToken;
    // await user.save();

    reSentEmail(user.email, resetToken);

    res.status(200).json({ msg: 'Reset email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Internal server error' });
  }
   }
  

    module.exports={registerUser,loginUser,forgetpassword}