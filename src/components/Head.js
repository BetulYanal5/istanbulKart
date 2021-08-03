import React from 'react'
import '../assets/css/Head.css'
import group3 from '../assets/images/Group3.svg'
const Head = () => {
    return (
        <div>
          <div className="head py-3" >
            <div className="container">
                <img src={group3} alt="head-istanbul-yazısı" />
            </div> 
          </div>  
        </div>
    )
}

export default Head
