import React from 'react'
import './Posts.css';
import images_insta from '../Nav/Images/images_insta.jpg';
import images2 from '../Nav/Images/images2.jpg';
import images3 from '../Nav/Images/images3.jpg';
import images4 from '../Nav/Images/images4.jpg';
import images5 from '../Nav/Images/images5.jpg';
import images6 from '../Nav/Images/images6.png';
import images7 from '../Nav/Images/images7.jpg';
import images8 from '../Nav/Images/images8.jpg';
import images1 from '../Nav/Images/images1.jpg';
const Posts = () => {
  return (
    <>
        <div className= "d-flex flex-wrap height-width">
            <div className= "post-box">
                <img src= {images_insta}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images2}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images3}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images4}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images5}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images6}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images7}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images8}  className= "images-insta"/>
            </div>

            <div className= "post-box">
                <img src= {images1}  className= "images-insta"/>
            </div>

        </div>
    </>    
  )
}

export default Posts
