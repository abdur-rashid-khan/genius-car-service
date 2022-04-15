import { Button } from "bootstrap";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link , useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import LoginWithOtherAccount from "../../LoginOtherAccount/LoginWithOtherAccount";
import './Login.css'

const Login = () => {
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
      alert('login successfully')
   }
   let from = location.state?.from?.pathname || '/';
   if(user){
      navigate(from,{replace:true});
   }
return (
   <div className="mt-5 pt-5">
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
