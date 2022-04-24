import { useEffect, useState } from "react";

const ServicesHook = () => {
   const [services, setServices] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setServices(data))
   },[])
   return {services,setServices};
};

export default ServicesHook;