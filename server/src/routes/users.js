const express = require('express')
const router = express.Router();
const User = require('../model/users')
router.use(express.json())
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {registerUser,loginUser,forgetpassword,getUser, editUser, deleteUser}=require('../controller/user')



router.post('/user-register',registerUser)


router.post('/user-login',loginUser
)

router.get('/user',getUser)

router.post('/reset-password', forgetpassword
     
);

router.put('/edit-user',editUser)
router.delete('/delete-user',deleteUser)


module.exports=router