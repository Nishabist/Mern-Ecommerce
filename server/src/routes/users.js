const express = require('express')
const router = express.Router();
const User = require('../model/users')
router.use(express.json())
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {registerUser,loginUser,forgetpassword}=require('../controller/user')



router.post('/user-register',registerUser)


router.post('/user-login',loginUser
)

router.post('/reset-password', forgetpassword
     
);


module.exports=router