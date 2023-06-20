import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Enrolled.css'
export default function Enrolled() {
  return (
    <div className='alert'>
     <h1> Enrolled Successfully!</h1>
     <Link  to='/MyCourses'>
        <button className='redirect'>
          <p className='view'> View Your Courses </p>
        </button>
     </Link>
    </div>
  )
}
