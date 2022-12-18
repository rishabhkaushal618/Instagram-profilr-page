import React from 'react';
import images from '../Nav/Images/images.jpg';
import Image_Plus from '../Nav/Images/Image_Plus.png';
import './Stories.css';

const Stories = () => {
  return ( 
    <div>
        <div className= "stories-image d-flex">
            <div className= "mx-3">
                <div>
                    <a href='#'><img src = {images} alt = "" title = "Stories" className = "stories-circle" /></a>
                </div>

                <div>
                    <p className= "mx-2">Pics</p>
                </div> 
            </div>
            
            <div>
                <div>
                    <a href='#'><i className="bi bi-plus-lg stories-plus" ></i></a>    
                </div>

                <div className= "margin-stories">
                    <p className= "mx-2">New</p>
                </div>
            </div>
           
        </div>

          <hr className= "underline-1" />  

    </div>
  )
}
 
export default Stories;
