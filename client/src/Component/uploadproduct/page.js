"use client";
import React, { useEffect,useState } from "react";
import { MdCancel } from "react-icons/md";
import { Formik, Form, Field } from 'formik';
import { message } from 'antd';

 import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  productName: Yup.string(),
  brandName: Yup.string(),
  // category: Yup.string(),
  // productImage: [],
  description: Yup.string(),
  price: "",
  selling: "",
});

function uploadproduct (){
  const [messageApi, contextHolder] = message.useMessage();
  const[file,setfile]=useState(null);
  
  const [categoryList, setCategoryList] = useState({})


  
//   const productadd =async(values)=>{
    
//     const res = await fetch('http://localhost:4001/upload-product', {
//       method:'POST', 
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(values)
//     })
//     const data = await res.json()
//       messageApi.open({
//         type: res.status == 200 ? 'success': 'error',
//         content: data.msg,
//       });
     
//       console.log(res)
//   }
  
//   const handleImage =(e)=>{
//     const file = e.target.files[0]
//    //  setUploadProductImage(file.name)
//     console.log("file",file)
//      }

const productHandle = async(values) => {
  var formData=new FormData();
  formData.append('image',file)

  Object.entries(values).map((item,id)=>{
    formData.append(item[0],item[1])
  })

  const res = await fetch('http://localhost:4001/upload-product', {
      method:'POST', 
      
      body: formData
    })
    const data = await res.json()
      messageApi.open({
        type: res.status == 200 ? 'success': 'error',
        content: data.msg,
      });
    console.log(res)
  } 
const uploadImage=(e)=>{
  setfile(e.target.files[0])
}

const categoryFetch = async()=> {
  const res = await fetch(`http://localhost:4001/category`)
  const data = await res.json()
  setCategoryList(data.categoryList) 
}


  useEffect(()=>{
    categoryFetch()
  },[])
 
  return (
    <>
      <div className=" w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-o bottom-0 flex justify-center align-center ">
        <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">upload product</h2>
            <div className="w-fit ml-auto text-2xl hover:text-red-600">
              <MdCancel />
            </div>
          </div>
          <Formik
       initialValues={{
        productName:[],
        brandName: '',
       
        categoryName: categoryList?.[0]?.categoryName,
        // productImage:'',
        description:'',
        price:'',
        selling:'',
         
       }}
       validationSchema={SignupSchema}
       onSubmit={(values) => {
         // same shape as initial values
         productHandle(values)
       }}
     >
       {({ errors, touched }) => (
         <Form className='pt-6  flex flex-col gap-2'>
         
         
          
            <label className="mt-3">Product Name:</label>
            <div className=' p-2'>
            <Field name="productName" placeholder="enter name of Product" />
           {errors.productName && touched.productName ? (
             <div>{errors.productName}</div>
           ) : null}
            </div>
          


          
            <label className="mt-3">brandName:</label>
            <div className=' p-2'>
            <Field name="brandName" placeholder="enter brandName" />
           {errors.brandName && touched.brandName ? (
             <div>{errors.brandName}</div>
           ) : null}
            </div>
          
          
           
         

        
            <label className="mt-3">category</label>
            <div className='p-2 flex'>
            <Field as='select'   name='categoryName' >
            {categoryList.length>0 && categoryList.map((item)=>{
              return   <option value={item.categoryName}>{item.categoryName}</option>
            })}
            </Field>
            <br/>
           
            </div>
        
            {/* <label className="mt-3">productImage</label>
            <div className='p-2 flex'>
           
          <input type="file"  onChange={handleImage}/>
           
            </div> */}
             Upload product Image <br/> 
          <input type="file" onChange={uploadImage}/>
          <br />
          <br />


            <label className="mt-3">description of product</label>
            <div className='p-2 flex bg-slate-100 w-full border rounded'>
            <Field name="description" placeholder="description"/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           
            </div>
           

            <label className="mt-3">price of product</label>
            <div className='p-2 flex'>
            <Field name="price"  placeholder="price"/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           
            </div>
          

            <label className="mt-3">selling price  of product</label>
            <div className='p-2 flex'>
            <Field name="selling"  placeholder="selling"/>
           {errors.selling && touched.selling ? (
             <div>{errors.selling}</div>
           ) : null}
           
            </div>
         
           <button type="submit"  className="text-red-400 hover:text-red-800 text-center">Submit</button>
         </Form>
       )}
     </Formik>
        </div>
      </div>
    </>
  );
}
 

export default uploadproduct
