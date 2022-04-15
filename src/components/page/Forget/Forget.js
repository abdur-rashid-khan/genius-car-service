import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link,useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Forget = () => {
   const navigate= useNavigate();
   let refEmail =useRef('');
   const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
   const forgetPassword = async (e)=>{
      e.preventDefault();
      let email = refEmail.current.value;
      await sendPasswordResetEmail(email);
      alert('send email');
      navigate('/login')
   }
   if (sending) { 
      return <p>Sending...</p>;
   }
   let errorMess='';
   if (error) {
      return (
         errorMess=<p>Error: {error.message}</p>
         
      );
   }
return (
   <div className="mt-5 pt-5">
      <Form id="form" onSubmit={forgetPassword}>
      <div className="text-center ">
         <h2>Forget Password </h2>
      </div>
      {
         sending?sending:''
      }
      {
         errorMess?errorMess:''
      }
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control
            ref={refEmail}
            type="email"
            required
            placeholder="Enter email"
         />
         {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text> */}
      </Form.Group>
      <button  id="btn" type="submit">
         Forget Password
      </button>
      <div className="underLogin mt-3">
         <Link className=" d-block" to="/register">
            Create a New Account
         </Link>
      </div>
      </Form>
   </div>
);
};

export default Forget;
