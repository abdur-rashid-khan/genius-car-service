import React from 'react';
import ServicesHook from '../../Hooks/ServicesHook';
import ManagePost from './ManagePost';

const Manage = () => {
  const {services,setServices}=ServicesHook();
  // console.log(services);
  return (
    <div className='container ' style={{marginTop:'5rem'}}>
      <h1>this manage page</h1>
      <div className="row" style={{alignItems:'center'}}>
        {
          services.map(s => <ManagePost data={s} key={s._id}></ManagePost>)
        }
      </div>
    </div>
  );
};

export default Manage;