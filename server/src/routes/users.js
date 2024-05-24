const express = require('express')
const router = express.Router();
const User = require('../model/users')
router.use(express.json())
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {registerUser,loginUser}=require('../controller/user')



router.post('/user-register',registerUser)


router.post('/user-login',loginUser
)




module.exports=router