import React from 'react';

const AddPost = () => {
  const post = (e) =>{
    e.preventDefault();
    const name  = e.target.title.value;
    const price  = e.target.price.value;
    const img  = e.target.photo.value;
    const description  = e.target.description.value;
    const post ={name, price,img,description};
    fetch('http://localhost:5000/user',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
      alert('Data added')
      e.target.reset();
    })
  }
  return (
    <div className="container" style={{marginTop:'5rem',width:'400px'}}>
      <form onSubmit={post}>
        <div>
          <label htmlFor="title">Title</label>
          <input className='form-control' type="text" name="title" id="title" placeholder='Title'/>
        </div>
        <div className='pt-3'>
          <label htmlFor="price">Price</label>
          <input className='form-control' type="text" name="price" id="price" placeholder='price'/>
        </div>
        <div className='pt-3'>
          <label htmlFor="photo">Photo</label>
          <input className='form-control' type="text" name="photo" id="photo" placeholder='Photo url'/>
        </div>
        <div className='pt-3'>
          <label htmlFor="description">Description</label>
          <textarea className='form-control' type="text" name="description" id="description" placeholder='Description' cols="30" rows="7"></textarea>
        </div>
        <button style={{width:'100%'}} className='btn btn-primary mt-3'>add post</button>
      </form>
    </div>
  );
};

export default AddPost;