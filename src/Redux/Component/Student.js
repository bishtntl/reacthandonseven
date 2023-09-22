import React from "react";
import {useSelector} from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";
import './style.css'

function StudentCompo(){
    const data=useSelector((state)=>state.studentdata)
    console.log(data)
    const Navi=useNavigate()


    return(
        <>
        <button className="addnew" onClick={()=>Navi('/addstudent')}>Add new Student </button>
        <table border={2} className="tbl">
            <thead>
                <tr className="toptr">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td><NavLink to='/editstudent' className='edit' state={{index}}>edit</NavLink></td>
                        </tr>
                        </>
                    )
                })}
            </tbody>
        </table>

        </>
    )
}
export default StudentCompo;