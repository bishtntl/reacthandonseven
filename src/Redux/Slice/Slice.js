import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {name:'Balam',age:23,course:'MERN',batch:'EA20'},
   { name:'doe',age:23,course:'MERN',batch:'EA20'},
   { name:'shaym',age:23,course:'MERN',batch:'EA20'},
   { name:'king',age:23,course:'MERN',batch:'EA20'},
   { name:'kong',age:23,course:'MERN',batch:'EA20'}
]



const StudentSlice=createSlice({
    name:'studentdata',
    initialState,
    reducers:{
        editeStuent:(state,action)=>{
            state[action.payload.index]=action.payload.info

        },
        addStudent:(state,action)=>{
            state.push(action.payload)

        }


    }

})
export const {editeStuent, addStudent}= StudentSlice.actions
export default StudentSlice.reducer