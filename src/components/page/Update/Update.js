import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const {id}= useParams()
  const [update , setUpdate] = useState({});
  const url =``;
  // show input value 
  useEffect(()=>{
    fetch(`http://localhost:5000/user/${id}`)
    .then(res =>res.json())
    .then(fData => {
      setUpdate(fData)
    })
  },[])
  // update
  const updateBtn = (e) =>{
    e.preventDefault();
    const name  = e.target.title.value;
    const price  = e.target.price.value;
    const img  = e.target.photo.value;
    const description  = e.target.description.value;
    const post ={name, price,img,description};
      fetch(`http://localhost:5000/user/${id}`,{
        method:'PUT',
        'headers':{
          'content-type':'application/json'
        },
        body:JSON.stringify(post)
      })
      .then(res =>res.json())
      .then(data => {
        console.log(data)
        setUpdate(post);
        alert('Data Update success')
      })

  }
  return (
    <div className='container' style={{marginTop:"5rem"}}>
      <div className="">
        <h1>Updating Now id :{id}</h1>
        <form onSubmit={updateBtn}>
        <div>
          <label htmlFor="title">Title</label>
          <input className='form-control' type="text" name="title" id="title" placeholder={update.name}/>
        </div>
        <div className='pt-3'>
          <label htmlFor="price">Price</label>
          <input className='form-control' type="text" name="price" id="price" placeholder={update.price}/>
        </div>
        <div className='pt-3'>
          <label htmlFor="photo">Photo</label>
          <input className='form-control' type="text" name="photo" id="photo" placeholder={update.img}/>
        </div>
        <div className='pt-3'>
          <label htmlFor="description">Description</label>
          <textarea className='form-control' type="text" name="description" id="description" placeholder={update.description} cols="30" rows="7"></textarea>
        </div>
        <button style={{width:'100%'}} className='btn btn-primary mt-3'>add post</button>
      </form>
      </div>
    </div>
  );
};

export default Update;