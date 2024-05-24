'use client'
import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';

 import * as Yup from 'yup';
 import Image from 'next/image';
 import { FaEye } from "react-icons/fa";
 import { FaEyeSlash } from "react-icons/fa";
 import Link from 'next/link'
 import { message } from 'antd';


 const SignupSchema = Yup.object().shape({
    name:Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  
});


const register = () => {
  const[showPassword,setShowPassword]=useState(false)
  const [messageApi, contextHolder] = message.useMessage();
const handleRegister =async(values)=>{
  const res = await fetch('http://localhost:4001/user-register', {
    method:'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  })
  const data = await res.json()
    messageApi.open({
      type: res.status == 200 ? 'success': 'error',
      content: data.msg,
    });
  console.log(res)
}
  return (
    <div >
      <div className='mx-auto container p-4 '>
        <div className='bg-white p-2 py-5 w-full max-w-md mx-auto shadow-md'>
        
     <h1>Register User</h1>
     
     <Formik
       initialValues={{
        name:'',
         email: '',
         password: '',
         phoneNumber:''
         
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         handleRegister(values)
       }}
     >
       {({ errors, touched }) => (
         <Form className='pt-6  flex flex-col gap-2'>
          <div className=' w-20  h-20 mx-auto'>
          <Image
      src="/signin.gif"
      width={90}
      height={90}
      alt="Picture of the author"
    />
          </div>
          <div className='grid'>
            <label>Name:</label>
            <div className=' p-2'>
            <Field name="name" placeholder="enter name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
            </div>
          </div>


          <div className='grid'>
            <label>Email:</label>
            <div className=' p-2'>
            <Field name="email" placeholder="enter email" />
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
            </div>
          </div>
          
           
         

           <div className='grid'>
            <label>PhoneNumber</label>
            <div className='p-2 flex'>
            <Field name="phoneNumber" placeholder="enter phonenumber"/>
           {errors.phoneNumber && touched.phoneNumber ? (
             <div>{errors.phoneNumber}</div>
           ) : null}
           
            </div>
      
           </div>

             
          <div className='grid'>
            <label>Password:</label>
            <div className='p-2 flex'>
            <Field name="password" type={showPassword ? "text" : "password"} placeholder="enter password"/>
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
           <div onClick={()=>setShowPassword((preve=>!preve))}>
           <span className='cursor-pointer'>{
            showPassword ?(
               <FaEye />
            )
            :
            (
              <FaEyeSlash />
            )

           }            
            </span>
           </div>
            </div>
           </div>
           
         
           <button type="submit" className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 mx-auto '>Signup</button>
         </Form>
       )}
     </Formik>
      <div>Already have account ? <Link href="/login" className='text-red-400 hover:text-red-800 text-center'>Signin</Link></div>

        </div>

      </div>
      
    </div>
  )

}

export default register
