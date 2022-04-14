import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Forget = () => {
   const refEmail =useRef('');
   const forgetPassword =(e)=>{
      e.preventDefault();
   }
return (
   <div className="mt-5 pt-5">
      <Form id="form" onSubmit={forgetPassword}>
      <div className="text-center ">
         <h2>Forget Password </h2>
      </div>
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
