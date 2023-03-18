import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

import  { useEffect, useState } from "react";
import "./Login.css";
import {auth,provider}  from "./Config.js"
import {signInWithPopup} from "firebase/auth"
import Home from "../Home/Home.js"

import Favourite from '../Favourite/Favourite';

const Login = () => {
  const [value,setValue] = useState('')
  const handleClick =()=>{
   
    alert("clicked")
    signInWithPopup(auth,provider).then(
      (user)=>{
          localStorage.setItem("user",JSON.stringify(user))
          localStorage.setItem("email",user.user.email)
          setValue(user.user.email)
         
       
      }
  ).catch((e)=>console.log()) 
  
  
     
  }

  useEffect(()=>{
    
      setValue(localStorage.getItem('email'))
    //  console.log(value==='')
      
  },[])
  return (
    <div className="d">
    {value!==''?<Favourite/>:
    <>
    <div>
    <center  className="cent" style={{padding:'150px',height:'100vh'}}>
       
      <GoogleIcon sx={{fontSize:'100px' ,backgroundColor:'white',border:'8px solid grey',borderRadius:'50px'}} onClick={handleClick} className="logo"/>
      
      </center>

  </div>
    
    </>
    }
    </div>
    
  )
}

export default Login
