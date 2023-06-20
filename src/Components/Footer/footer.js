import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (    
    <div className='footer'>
        <div className='container'>
            <div className='row'>

                <div className='footer-col'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href=" ">OnYourOwn Pvt Ltd</a></li>
                        <li><a href=" ">Near El Plazo</a></li>
                        <li><a href=" ">Vijayawada </a></li>
                        <li><a href=" ">AndhraPradesh, India</a></li>
                        <li><a href=" ">Phn: 0000000000</a></li>
                        <li><a href=" ">Tel: 00000000000</a></li>

                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>Our Website</h4>
                    <ul>
                        <li><a href=" ">About Us</a></li>
                        <li><a href=" ">Our Services</a></li>
                        <li><a href=" ">Privacy Policy</a></li>
                        <li><a href=" ">FAQ</a></li>
                    </ul>
                </div>


                <div className='footer-col'>
                    <h4>Follow Us</h4>
                    <div className='social-links'>
                        <a href=" "><FacebookIcon/></a>
                        <a href=" "><InstagramIcon/></a>
                        <a href=" "><TwitterIcon/></a>
                        <a href=" "><LinkedInIcon/></a>
                    </div>     
                </div>
            </div>
        </div>
      
    </div>
  )
}
