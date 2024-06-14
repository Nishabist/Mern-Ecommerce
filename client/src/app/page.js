'use client'
import React from "react"
import Home from "../app/Home/page"
import Header from "../Component/Header/page"
import Footer from "../Component/Footer/page"
import { useSelector } from "react-redux"
import Admin from './admin/page'

 function main() {
  const {userDetails} = useSelector(state=>state.user)
  const ConditionalRoute =()=>{
    if(userDetails?.role ==='admin')return <Admin/>
    else return<Home/>
  }
  return (
    <div >
      
      <main>
      <Header/>
      <ConditionalRoute/>
      <Footer/>
      </main>
      
      
    </div>
  )
}

export default main