// import './App.css';
import React, { Fragment } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import { Routes,Route, redirect } from 'react-router-dom';
import Courses from './Components/Courses/Courses';
import Enrolled from './Components/Courses/Enrolled';
import CourseItems from './Components/Courses/CourseItems';
import MyCourses from './Components/Courses/MyCourses';
import CourseDescription from './Components/Courses/CourseDescription';
function App() {
    return(
    <div className="App">
      <Routes>
        {/* <Route  exact path="/" Component={Login}/> */}
        <Route  exact path="/" Component={Login}/>
        <Route exact path="/Register" Component={Register}/>
          
        <Route path="/footer" Component={Footer}/>
        <Route path="/Courses" element={<><Header/><Courses/> </>}/>
        <Route path='/CourseDescriptions/:id'  element={<><Header/><CourseDescription/> </>}/>
        <Route path='/Home' element={<><Header/><Home /> <Footer /> </>} />
        <Route path='/CourseDescriptions/:id/Enrolled' element={<><Header/><Enrolled/> </>}/>
        {/* <Route path='/user' Component={PrivateRoute}>
          <Route path='Courses' Component={MyCourses}/>
        </Route> */}
          <Route path='/MyCourses' element={<><Header/><MyCourses/> </>}/>
          <Route path='/MyCourses/CourseItems' element={<><Header/><CourseItems/> </>}/>
    </Routes>
        
      
    </div>

  );
}
export default App;
