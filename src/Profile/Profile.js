import React from 'react'
import './Profile.css';
import images from '../Nav/Images/images.jpg';

const Profile = ({user}) => {
  return (
    <div className="container-fluid mt-2">
        <div className="row">
            <div className="col-3">
                <div className= "pofile-image">
                        <div className= "d-flex">
                             <a href='#'><img src = {user.data?.avatar} alt = "" title = "Profile" className = "profile-circle"/></a>
                        </div>
                </div>
            </div>
                <div className="col-8">
                    <div className= "margin-top-profile-name">
                         <span className= "profile-name">rishabh_smart_boy</span>
                        <button className = "margin-right-profile">Edit Profile</button>
                    </div> 
                <div className= "d-flex my-4 follow">                  
                            <p className= "follow-posts"><b>73</b> posts</p>
                            <p className= "mx-5"><b>142</b> followers</p>
                            <p><b>353</b> following</p>
                </div> 
                <div className= "margin">
                            <h5>{user.data?.first_name} {user.data?.last_name}</h5>
                            Email: <a href='www.google.com'>{user.data?.email}</a>
                            <p>
                                Hey!😊 Am I Cute..😙
                                <br />
                                Blushing... 😍✌<br />
                                -------------------------------- <br />
                                My Youtube Tech Channel <br />
                            </p>
                            <p className= "hover-link"><a href='m.youtube.com/channel/UC2cpMS0h9DxccR7LAzTomIg'>m.youtube.com/channel/UC2cpMS0h9DxccR7LAzTomIg</a></p>
                </div>
                </div>  
                   <hr  className= "underline"/>   
                   <hr className= "underline-2" /> 
            </div>
        </div>
  )
}

export default Profile;

