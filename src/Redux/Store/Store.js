import {configureStore} from '@reduxjs/toolkit'
import StudentSlice from '../Slice/Slice';


const Store =configureStore({
    reducer:{
        studentdata:StudentSlice
    }
})
export default Store;