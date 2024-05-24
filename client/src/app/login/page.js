'use client'
import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Image from 'next/image';
 import { FaEye } from "react-icons/fa";
 import { FaEyeSlash } from "react-icons/fa";
 import Link from 'next/link'
 import { useDispatch } from 'react-redux';
 import {  message } from 'antd';
import { setLoginDetails } from '../../Redux/slices/userSlice';
import { useRouter } from 'next/navigation'

 const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
});


const login = () => {
  const dispatch=useDispatch()
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const[showPassword,setShowPassword]=useState(false)
   const handleLogin = async(values) => {
    const res = await fetch('http://localhost:4001/user-login', {
        method:'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const data = await res.json()
      messageApi.open({
        type: res.status == 200 ? 'success': 'error',
        content: data.msg,
      });
      if(res.status==200){
        dispatch(setLoginDetails(data.userDetail))
        router.push('/')
      }
    };
 
  return (
    <div >
      <div className='mx-auto container p-4 '>
        <div className='bg-white p-2 py-5 w-full max-w-md mx-auto shadow-md'>
        
     <h1>Login</h1>
     
     <Formik
       initialValues={{
        phoneNumber: '',
         password: '',
         
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         handleLogin(values);
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
            <label>phoneNumber:</label>
            <div className=' p-2'>
            <Field name="phoneNumber" placeholder="enter phoneNumber" />
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
            
            
  <Link href="/forgetpassword" className='block w-fit ml-auto hover:underline hover:text-red-600'>forget-password</Link>
           </div>
           
         
           <button type="submit" className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 mx-auto '>Login</button>
         </Form>
       )}
     </Formik>
      <div>Don't have account ? <Link href="/signup" className='text-red-400 hover:text-red-800 text-center'>Signup</Link></div>

        </div>

      </div>
    
    </div>
  )
}

export default login
