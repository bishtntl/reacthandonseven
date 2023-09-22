import {BrowserRouter,NavLink,Route,Routes} from 'react-router-dom'
import HomeCompo from './Home';
import StudentCompo from './Student';
import ContactCompo from './Contact';
import EditCompo from './EditStudent';
import AddCompo from './AddStudent';

function RouteCompo(){

    return(
        <>
        <BrowserRouter>
        <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/student'>Student</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </div>
        <Routes>
            <Route path='/' element={<HomeCompo/>}> </Route>
            <Route path='/student' element={<StudentCompo/>}> </Route>
            <Route path='/contact' element={<ContactCompo/>}> </Route>
            <Route path='/editstudent' element={<EditCompo/>}> </Route>
            <Route path='/addstudent' element={<AddCompo/>}> </Route>
        </Routes>


        </BrowserRouter>
        
        </>
    )
}
export default RouteCompo;