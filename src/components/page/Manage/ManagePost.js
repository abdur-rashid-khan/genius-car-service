import React from "react";
import { Link } from "react-router-dom";
import ServicesHook from "../../Hooks/ServicesHook";

const ManagePost = ({ data }) => {
  const { services, setServices } = ServicesHook();
  const deleteData = (id) => {
    const confirm = window.confirm("Are You Sure");
    if (confirm) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if( data.deletedCount > 0){
            const newData = services.filter(s => s._id !== id);
            setServices(newData);
            alert("Data Delete success");
            console.log(data)
          }
        });
    }
  };
  return (
    <>
      <div className="col-sm-2 py-2">
        <img className="img-fluid" src={data.img} alt="" />
      </div>
      <div className="col-sm-7 py-2">
        <p>{data.name}</p>
        <p>{data.description}</p>
      </div>
      <div className="col-sm-3 py-2">
        <Link to={`/user/${data._id}`} className='btn btn-primary'>Update</Link>
        <button onClick={() => deleteData(data._id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </>
  );
};

export default ManagePost;
