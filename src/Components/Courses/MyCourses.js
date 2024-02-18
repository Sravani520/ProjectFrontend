import React from 'react'
import CourseItems from './CourseItems'
import '../CSS/CourseDescription.css'
import { useStateValue } from '../../StateProvider'

export default function MyCourses() {
  const [{CourseList}, dispatch] =useStateValue();
  return (
    <div className='CourseHead'>
      <h1>Your Courses</h1><br/>
      {CourseList.map(item=>(
        <div key={item.id}>
            <CourseItems
            id={item.id}
            title={item.title}
            image={item.image}/>
            </div>
        ))}
    </div>
  )
}
