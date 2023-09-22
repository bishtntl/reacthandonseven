import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Slice/Slice";
import './style.css'


function AddCompo(){
    const Navi=useNavigate()
    const dispatch=useDispatch()
 
    const[info,setinfo]=useState({
        name:'',
        age:'',
        course:'',
        batch:''
    })

       const handleChange =(e)=>{
        setinfo({...info,[e.target.name]:e.target.value})

       }
       const handleClick =()=>{
        dispatch(addStudent(info))
        Navi('/student')
       }
       



    return(
        
      
        <>
        <form>
        <label htmlFor="name" className="name">Name</label>
        <input type="text" id="name" name="name" placeholder="enter your name" onChange={handleChange}/><br/>
        <label htmlFor="age" className="age">Age</label>
        <input type="number" id="age" name="age" placeholder="enter age" onChange={handleChange}/><br/>
        <label htmlFor="course" className="course">Course</label>
        <input type="text" id="course" name="course" placeholder="enter course" onChange={handleChange}/><br/>
        <label htmlFor="batch" className="batch" >Batch</label>
        <input type="text" id="batch" name="batch" placeholder="enter your batch" onChange={handleChange}/><br/>
        <button className="btnthree" onClick={()=>Navi('/student')}>go back</button>
        <button className="btnfour"  onClick={handleClick}>addnew</button>
        </form>
        </>
      
    )
}
export default AddCompo;