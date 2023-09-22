import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editeStuent } from "../Slice/Slice";
import './style.css'

function EditCompo(){
   const index= useLocation().state.index;
   const data=useSelector((state)=>state.studentdata)
   const dispatch=useDispatch();
   const Navi=useNavigate();
   const[info,setinfo]=useState({
    name:data[index].name,
    age:data[index].age,
    course:data[index].course,
    batch:data[index].batch
   })
   const handleChange =(e)=>{
    setinfo({...info,[e.target.name]:e.target.value})
   }
   const handle=(e)=>{
    e.preventDefault()
    dispatch(editeStuent({info,index}))
    Navi('/student')
   }



    return(
<div className="main">
        <form>

        <label htmlFor="name" className="name">Name</label>
        <input type="text" id="name" name="name" placeholder="enter your name" onChange={handleChange}/><br/>
        <label htmlFor="age" className="age">Age</label>
        <input type="number" id="age" name="age" placeholder="enter age" onChange={handleChange}/><br/>
        <label htmlFor="course" className="course">Course</label>
        <input type="text" id="course" name="course" placeholder="enter course" onChange={handleChange}/><br/>
        <label htmlFor="batch" className="batch">Batch</label>
        <input type="text" id="batch" name="batch" placeholder="enter your batch" onChange={handleChange}/><br/>
        <button className="btnone" onClick={()=>Navi('/student')}>go back</button>
        <button className="btntwo" onClick={handle}>update</button>
        </form>
        </div>
    )
}
export default EditCompo;