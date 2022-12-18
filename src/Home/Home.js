import React from 'react';
import './Home.css';
import images from '../Nav/Images/images.jpg';
import images_insta from '../Nav/Images/images_insta.jpg';
import images2 from '../Nav/Images/images2.jpg';
import images3 from '../Nav/Images/images3.jpg';
import images4 from '../Nav/Images/images4.jpg';
import images5 from '../Nav/Images/images5.jpg';
import images6 from '../Nav/Images/images6.png';
import images7 from '../Nav/Images/images7.jpg';
import images8 from '../Nav/Images/images8.jpg';
import images1 from '../Nav/Images/images1.jpg';

const Home = () => {
  return (
    <>
        <div className= "d-flex justify-content-around p-2 bg-secondary">
            <h1>Posted-Photos</h1>
            <a href="#"><img src = {images} alt = "" title = "Profile" className = "return_profile"/></a>
        </div>

        <section className= "card-1">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images_insta} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "/#"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-2">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images2} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-3">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images3} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-4">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images4} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-5">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images5} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-6">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images6} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-7">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images7} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-8">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images8} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>

        <section className= "card-1">
            <div className= "center_image">
                <div className= "d-flex text-center">
                    <img src = {images} alt = "" title = "Profile" className = "posted_Image"/>     
                    <h5 className= "mt-1 mx-3">rishabh_smart_boy</h5>
                </div>
            </div>

            <div>
                <div className= "margin_auto">
                <img src= {images1} className= "image_posted"/>
                </div>
            </div>

            <div className= "center_like">
                <h5 className= "p-2 color">
                       <a href= "#/"><i class="bi bi-heart"></i></a>
                       <a href= "#"><i class="bi bi-chat mx-3"></i></a>
                       <a href= "#"><i class="bi bi-send"></i></a>
                       <a href= "#"><i class="bi bi-bookmark float-end"></i></a>
                </h5>
            </div>
        </section>



    </>
  )
}

export default Home;
