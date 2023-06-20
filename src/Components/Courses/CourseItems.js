import React from 'react'
import {Link} from 'react-router-dom'
import  PropTypes from 'prop-types'
import '../CSS/CourseDescription.css'
import { useEffect } from 'react'
import { useStateValue } from '../../StateProvider'
export default function CourseItems({id,title,image}) {
    const [{CourseList},dispatch] =useStateValue();
    CourseItems.propTypes={
        id:PropTypes.node,
        title:PropTypes.node,
        image:PropTypes.node,
    }
    useEffect(()=>{
        localStorage.setItem("YourCourses",JSON.stringify(CourseList))
    },[])
    const RemoveCourse=()=>{
        dispatch({
            type: 'REMOVE_COURSE',
            id:id,
        })
    }
  return (
        <div  className="menu-item">
        <img src={image} alt={title} className="photo"/>
        <div className="item-info">
            <p className="title">{title}</p>
            <Link to={`/CourseDescriptions/${id}`}>
            <button >
             OPEN COURSE          
            </button>
            </Link>&nbsp;&nbsp;
            <button onClick={RemoveCourse}>REMOVE COURSE</button>
        </div>
        </div>
        

  )
}
