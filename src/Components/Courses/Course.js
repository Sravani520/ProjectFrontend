import React from "react"
import {Link} from 'react-router-dom'
import '../CSS/Courses.css'
import PropTypes from 'prop-types'

const Course=({id,title,image})=>{
    Course.propTypes={
        id:PropTypes.node,
        title:PropTypes.node,
        image:PropTypes.node
    }
    return(
        <div className="course">
            <div className="Course_info">
                <p>{title} </p>
            </div>
            <img src={image} alt="" />
            <Link className="link" to={`/CourseDescriptions/${id}`}>
            <button id="btn">View Course</button>
            </Link>
            
        </div>
    )
}

export default Course;