import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import items from '../Courses/data'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {
    const navigate=useNavigate();
    const [value,setValue]=useState('');

    const onChange=(event)=>{
        setValue(event.target.value);
    }
    const onSearch=(searchTerm)=>{
        setValue(searchTerm);
        console.log('search',searchTerm);
    }
    
  return (
    <div className="Header">
        <img className="Header_Logo" src="images/Logo.png" alt="Logo" width="300"></img>

        <div className="Header_search">
            <div className="search-inner">
            <input className="Header_searchInput"
             value={value} 
             type="text" placeholder="Search a course"
             onChange={onChange}/><br></br>
            <button className='btnss'onClick={()=>onSearch(value)}>
            <SearchIcon className="SearchIcon"/>
            </button>
            </div>
            <div className="dropdown">
              {items.filter(item=>{
                    const searchTerm = value.toLowerCase();
                    const title=item.title.toLowerCase();
                    return searchTerm && title.startsWith(searchTerm);
                })
                .map((item) => (
                <div onClick={()=>onSearch(item.title)} key={item.id} className="dropdown-row">
                <Link to={`/CourseDescriptions/${item.id}`}>
                       <p className="main">{item.title}</p>
                </Link>
                    </div>))}
            </div>
        </div>

        <div className="Header_nav">

            <Link to="/Home" className="link">
            <div className="HeaderOption">
                <span className="OptionOne">
                    Home
                 </span>
            </div>
            </Link>

            <Link to='/Courses' className="link">
            <div className="HeaderOption">
                <span className="OptionTwo">
                    Courses
                </span>
            </div>
            </Link>

            <Link to="/footer" className="link">
            <div className="HeaderOption">
                <span className="OptionThree">
                    Contact
                </span>
            </div>
            </Link>

            <Link to="/MyCourses" className="link">
            <div className="HeaderOption">
                <span className="OptionFour">
                My Courses
                </span>
            </div>
            </Link>
            <div className="HeaderOption">
                <span className="OptionSix">
                    <button className="LogOut" onClick={()=>{
                        localStorage.removeItem('token')
                        navigate('/')
                    }}>
                    LogOut
                    </button>
                </span>
            </div>
            </div>
        </div>

      
  )
}
