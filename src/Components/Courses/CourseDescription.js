import React from 'react'
import items from './data'
import { Link, useParams } from 'react-router-dom'
import '../CSS/CourseDescription.css'
import { useStateValue } from '../../StateProvider'
export default function CourseDescription() {
 
  const itemID =useParams();
  console.log(itemID);
  const item = items.find((item)=>item.id == itemID.id);
  console.log(item)
  const {id,title,image,description,src,content1,content2,content3,content4,inner1,inner2,inner3,inner4,inner5,inner6,inner7,inner8,inner9,inner10,inner11,inner12,inner13,inner14,inner15,inner16}=item;
  const [ { CourseList}, dispatch] = useStateValue();
  console.log("this is the CoursList",CourseList)
  const addToCourseList=()=>{
    dispatch({
      type: "ADD_TO_COURSELIST",
      item:{
        id:id,
        title:title,
        image:image,
      },
    });
  };
  return(
    <div>
        <div className="section-cen">
          <div className='section-top'>
          <p className='titles'>{title}</p><br/>
          <p className='head'> DESCRIPTION: </p><p className='description'>{description}</p><br/>
          <Link to='./Enrolled'>
          <button onClick={addToCourseList} className='btn'>ENROLL COURSE</button>
          </Link>
          </div>
        </div>
        <p className='structure'>COURSE STRUCTURE:</p>
        <ul className='content-list'>
        <li className='outer'>
          <p>{content1}</p>
          <ul style={{listStyleType:"disc"}}>
            <li className='inner'>{inner1}</li>
            <li className='inner'>{inner2}</li>
            <li className='inner'>{inner3}</li>
            <li className='inner'>{inner4}</li><br/>
          </ul>
         </li><br/>
        <li className='outer'>
          <p>{content2}</p>
          <ul style={{listStyleType:"disc"}}>
            <li className='inner'>{inner5}</li>
            <li className='inner'>{inner6}</li>
            <li className='inner'>{inner7}</li>
            <li className='inner'>{inner8}</li><br/>
          </ul>
        </li><br/>
        <li className='outer'>
          <p>{content3} </p>
          <ul style={{listStyleType:"disc"}}>
            <li className='inner'>{inner9}</li>
            <li className='inner'>{inner10}</li>
            <li className='inner'>{inner11}</li>
            <li className='inner'>{inner12}</li><br/>
          </ul>
        </li><br/>
        <li className='outer'>
        <p>{content4}</p> 
          <ul style={{listStyleType:"disc"}}>
            <li className='inner'>{inner13}</li>
            <li className='inner'>{inner14}</li>
            <li className='inner'>{inner15}</li>
            <li className='inner'>{inner16}</li><br/>
          </ul>
        </li>
      </ul>
        <br/><br/><br/>
        <p className='tutorial'> COURSE TUTORIAL </p>
        <iframe src={src}/>
        <div className='back'>
           <Link className='link'to='/Courses'>Back to Courses</Link>
        </div>
        </div>
    );
}

  