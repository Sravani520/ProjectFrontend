import React, { useEffect } from 'react'
import './Home.css'
import Courses from '../Courses/Course'
import {Link, useNavigate} from 'react-router-dom'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function Home() {
  const navigate =useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[])
  return (
        <div className='home'>
        <div className='image'> 
            <img width="100%" height="100%" className='homepage_image' src="https://elearningtrade.unctad.org/pluginfile.php/1/theme_lambda/slide1image/1684314205/ELEARNING%20ON%20TRADE%20WEBSITE-01%20%281%29.png" alt="homepage"/>
        </div>
        <div className='heading'>
            <h2>Welcome to OnYourOwn!</h2>
            <div className="span"><span>GET STARTED <ExpandCircleDownIcon/></span></div>
        </div>
        <div className='Content'>
          <h1>Popular Courses</h1>
          <div className='Content_row'>
          <Courses id={11} title="Learn Guitar The Easy Wayy" image='https://play-guitars.com/wp-content/uploads/2019/06/the-top-6-techniques-for-practising-acoustic-guitar-01-1.jpg'/>
          <Courses id={12} title="Complete PHP Bootcamp"  image='https://www.netsolutions.com/insights/wp-content/uploads/2022/11/what-is-php-for-web-development-and-reason-to-use-it.png'/>
          <Courses id={13} title="Learn Python A-Z" image='https://www.digitalnest.in/blog/wp-content/uploads/2019/07/10-Benefits-of-Learning-Python-Programming-Language-and-Its-Use-Cases.png'/>

          </div>

          <div className='Content_row'>
          <Courses id={14} title="Hands-on Artificial Intelligence" image='https://www.zdnet.com/a/img/resize/1b0f3a471607ff123236026b04b964e1853ed41b/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&fit=crop&height=900&width=1200'/>
          <Courses id={15} title="Learn Vue JS" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZpuKKtaZnmLwSsbp6XAHwTr-ThSUMUaGThxDFug0RA&usqp=CAU&ec=48665699'/>
          <Courses id={16} title="Angular JS" image='https://www.etatvasoft.com/blog/wp-content/uploads/2017/01/b-thumb-img12.jpg'/>
          </div>

          <div className='Content_row'>
          <Courses id={17} title="JavaScript Course" image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'/>
          <Courses id={18} title="MERN Full Stack" image='https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png'/>
          <Courses id={19} title="JAVA" image='https://codemithra.com/wp-content/uploads/2020/06/java-logo.png'/>
          </div>
            <div className="views"><Link className='link' to={'/Courses'}><span>VIEW ALL COURSES</span></Link></div>
        </div>
        </div>
  )
}
