import React from "react";
import google from '../../../images/social/google.png';
import fb from '../../../images/social/fb.png';
import git from '../../../images/social/git.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation,useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LoginWithOtherAccount = () => {
   const [signInWithGoogle ,user, loading, error] = useSignInWithGoogle(auth);
   // for google 
   const loginWithGoogle =()=>{
      signInWithGoogle()
   }
   // for github
   const [signInWithGithub , user1, loading1, error1]=useSignInWithGithub(auth);
   const logInGithub =()=>{
      signInWithGithub()
   }
   // for facebook 
   const [signInWithFacebook,fbUser,fbLoading,fbError]=useSignInWithFacebook(auth);
   const loginWithFb =()=>{
      signInWithFacebook();
   }
   const navigate= useNavigate();
   const location = useLocation()
   let from = location.state?.from?.pathname || '/';

   if(user || user1 || fbUser){
      navigate(from,{replace:true});
      alert('login successfully')
   }
   let loadingmes='';
   if (loading || loading1||fbLoading) {
      loadingmes = <p>Loading...</p>;
   }
   let errormess='';
   if (error||error1 || fbError) {
      errormess = <p>Error: {error?.message} {error1?.message} {fbError?.message}</p>
   }
return (
   <div className="py-4">
      {
         errormess?errormess:''
      }
      {
         loadingmes?loadingmes:''
      }
      <div className="text-center d-flex align-items-center ">
         <div className="" style={{width:'100%',height:'2px',background:'#B3B6B7'}}></div>
         <div className="px-2">or</div>
         <div className="" style={{width:'100%',height:'2px',background:'#B3B6B7'}}></div>
      </div>
      <div className="d-flex align-items-center justify-content-evenly pt-4">
         <div onClick={()=>loginWithGoogle()} className="google " style={{width:'35px',height:'35px',cursor:'pointer'}}>
            <img className="img-fluid pe-auto" src={google} alt="" />
         </div>
         <div  onClick={()=>loginWithFb()} className="facebook" style={{width:'30px',height:'30px',cursor:'pointer'}}>
            <img className="img-fluid pe-auto" src={fb} alt="" />
         </div>
         <div onClick={()=>logInGithub()} className="github" style={{width:'30px',height:'30px',cursor:'pointer'}}>
            <img className="img-fluid pe-auto" src={git} alt="" />
         </div>
      </div>
   </div>
);
};

export default LoginWithOtherAccount;
