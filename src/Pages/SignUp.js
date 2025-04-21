import React, { useState } from 'react'
import mystyle from "./signup.module.css"
import InputForm from './InputForm'
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../firebase';
export default function SignUp() {
  const [values,setValues] = useState({
    name:"",
    email:"",
    password:""
  })
  const [errMsg,setErrMsg] = useState("");
  const navigate = useNavigate()
  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.password){
      setErrMsg("Please fill all feilds")
      return
    }
    setErrMsg("");
    createUserWithEmailAndPassword(auth,values.email,values.password)
    .then((response)=>{
      let user = response.user;
      console.log(user)
      updateProfile(user,{
        displayName: values.name
      })
      navigate("/Login")
    }).catch((err)=>{
       console.log(err)
       alert("Error Occured : "+ err.message);
    })
    
  }
  return (
    <div className={mystyle.form}>
      <div className={mystyle.innerBox}>
        <h1 style={{color:"white",textAlign:"center"}}>Signup</h1>
        <InputForm label="Name: " type="text"
        placeholder="Enter Name" value={values.name}
        onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))}/>
        <InputForm label="Email: " type="email" placeholder="Enter email"
        value={values.email}
        onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
        <InputForm label="Password: " type="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}/>
      
      <div className={mystyle.footer}>
        <b>{errMsg}</b>
        <button onClick={handleSubmission}>SignUp</button>
        <div className={mystyle.navigate}>
          <p>Already have an account?<Link className={mystyle.btn} to="/Login">Login</Link></p>
  
        </div>
      </div>
      </div>
    </div>
  )
}
