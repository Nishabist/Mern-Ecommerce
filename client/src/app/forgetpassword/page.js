'use client'
import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Image from 'next/image';
 import { FaEye } from "react-icons/fa";
 import { FaEyeSlash } from "react-icons/fa";
 import Link from 'next/link'
 import Footer from '../../Component/Footer/page';

 const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
});


function forgetpassword() {
  const[showPassword,setShowPassword]=useState(false)
  return (
    <div >
    <div className='mx-auto container p-4 '>
      <div className='bg-white p-2 py-5 w-full max-w-md mx-auto shadow-md'>
      
   <h1>Login</h1>
   
   <Formik
     initialValues={{
       email: '',
       password: '',
       
     }}
     validationSchema={SignupSchema}
     onSubmit={values => {
       // same shape as initial values
       console.log(values);
     }}
   >
     {({ errors, touched }) => (
       <Form className='pt-6 '>
        <div className=' w-20  h-20 mx-auto'>
        <Image
    src="/signin.gif"
    width={90}
    height={90}
    alt="Picture of the author"
  />
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
          <label>New Password:</label>
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
         
       
         <button type="submit" className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 mx-auto '>Login</button>
       </Form>
     )}
   </Formik>
  

      </div>

    </div>
    <Footer/>
  </div>
  )
}

export default forgetpassword