import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({children}) => {
   const [user,loading] = useAuthState(auth);
   const location = useLocation();
   if(loading){
      return <Loading></Loading>;
   }
   if(!user){
      return <Navigate to="/login" state={{ from: location }} replace />
   }
   if(!user.emailVerified){
      return <div style={{marginTop:'5rem',textAlign:'center'}}> 
               <h2>Verify Your Email </h2>
               <p><strong>note : </strong> sometime email go to the spam box check your spam box</p>
         </div>;
   }
   return children;
};

export default RequireAuth;