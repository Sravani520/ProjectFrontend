import React from "react";
import '../CSS/Categories.css'
import {Link} from 'react-router-dom'
import  PropTypes  from "prop-types";
const CourseDetails=({items})=>{
    CourseDetails.propTypes={
        items:PropTypes.node
    }
    return(
        <div className="section-center">
            {items.map((item)=>{
                const {id,title,image}=item;
                return(
                    <div key={id} className="menu-item">
                    <img src={image} alt={title} className="photo"/>
                    <div className="item-info">
                        <p className="title">{title}</p>
                        <Link to={`/CourseDescriptions/${item.id}`}>
                        <button >
                         VIEW COURSE DESCRIPTION         
                        </button>
                        </Link>
                    </div>
                    </div>
                    
                );
            })}
        </div>
    );
};
export default CourseDetails;