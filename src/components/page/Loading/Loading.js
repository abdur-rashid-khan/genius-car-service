import React from 'react';

const Loading = () => {
   return (
      <div style={{width:'100%',height:'400px',display:'flex',alignItems:'center',justifyContent:'center'}}>
         <div class="spinner-border text-primary" role="status">
            <span  class="visually-hidden">Loading...</span>
         </div>
      </div>
   );
};

export default Loading;