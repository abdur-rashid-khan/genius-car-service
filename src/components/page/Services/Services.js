import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHook from '../../Hooks/ServicesHook';
import Service from '../../page/Service/Service';

const Services = () => {
   const {services} = ServicesHook()
   return (
      <div id='services' className="container">
         <div className="services-title text-center py-4">
            <h2 className='text-primary'>services</h2>
         </div>
         <div className=' row'>
            {
               services.map(product => <Service key={product.id} product={product}></Service>)
            }
         </div>
      </div>
   );
};

export default Services;