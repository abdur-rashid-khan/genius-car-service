import { Button } from "bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { Link , useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import LoginWithOtherAccount from "../../LoginOtherAccount/LoginWithOtherAccount";
import './Login.css'

const Login = () => {
const [agree , setAgree]=useState();
const refAgree =useRef(false);
const checkBox=(e)=>{
   // const checkBoxValue = refAgree.current.value;
   const checkBoxValue =e.target.value;
   setAgree(checkBoxValue)
}
console.log(agree)



   const location = useLocation();
   const navigate= useNavigate();
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
      ] = useSignInWithEmailAndPassword(auth);

   const refEmail =useRef('');
   const refPassword =useRef('');

   const Login=(e)=>{
      e.preventDefault();
      const email = refEmail.current.value;
      const password = refPassword.current.value;
      signInWithEmailAndPassword(email,password);
   }
   let from = location.state?.from?.pathname || '/';
   useEffect(()=>{
      if(user){
         navigate(from,{replace:true});
         alert('login successfully')
      }
   },[user])
return (
   <div className="mt-5 pt-5">
      <Helmet>
         <title>login - car services</title>
      </Helmet>
      <Form id="form" onSubmit={Login}>
         <div className="text-center ">
            <h2>Login </h2>
         </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control ref={refEmail} type="email" required placeholder="Enter email" />
         {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control ref={refPassword} type="password" required placeholder="Password" />
      </Form.Group>
         <Form.Group className="mb-3 d-flex" controlId="formBasicCheckBox">
         <Form.Check onClick={checkBox} className="pe-2" type='checkbox' ref={refAgree}/>
         <Form.Label style={{cursor:'pointer',}}>Agree Terms And Conditions</Form.Label>
      </Form.Group>
      <button  id='btn' type="submit">
         Login
      </button>
      <div className="underLogin mt-3">
         <Link className=" d-block"  to="/register">Create a New Account</Link>
         <Link  to="/forget">Forget Password</Link>
      </div>
      <LoginWithOtherAccount></LoginWithOtherAccount>
      </Form>
   </div>
);
};

export default Login;
