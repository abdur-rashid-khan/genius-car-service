import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init";




const SignIn = () => {
   const navigate= useNavigate()
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

   const refName = useRef('');
   const refEmails =useRef('');
   const refPassword =useRef('');

   const SignInBtn =(e)=>{
      e.preventDefault();
      const password = refPassword.current.value;
      const email = refEmails.current.value;
      const name =refName.current.value;
      
      createUserWithEmailAndPassword(email , password);
   }
   if(user){
      navigate('/home')
   }
return (
   <div className="mt-5 pt-5">
      <Form id="form" onSubmit={SignInBtn}>
      <div className="text-center ">
         <h2>Register Now  </h2>
      </div>
      <Form.Group className="mb-3" controlId="formBasicUser">
         <Form.Label>User Name </Form.Label>
         <Form.Control ref={refName} type="text" placeholder="Enter Your Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control ref={refEmails} type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control
            ref={refPassword}
            type="password"
            placeholder="Password"
            required
         />
      </Form.Group>
      <button id="btn"  type="submit">
         Login
      </button>
      <div className="underLogin mt-3">
         <Link className="d-block" to="/login">
            I Have Account
         </Link>
         {/* <Link  to="/forget">Forget Password</Link> */}
      </div>
      </Form>
   </div>
);
};

export default SignIn;
