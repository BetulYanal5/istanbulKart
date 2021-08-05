import React from 'react'
import '../assets/css/Head.css'
import group3 from '../assets/images/Group3.svg'
import { Link } from 'react-router-dom'
const Head = () => {
    return (
        <div>
          <div className="head py-3" >
            <div className="container">
             <Link to="logo">
                <img src={group3} alt="head-istanbul-yazısı" />
              </Link>
            </div> 
          </div>  
        </div>
    )
}

export default Head
