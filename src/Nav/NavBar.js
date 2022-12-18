import React from 'react';
import './NavBar.css';
import images from './Images/images.jpg';

const NavBar = () => {
  return (
    <div className= "level-nav">
      <nav className="navbar navbar-expand-lg" style = {{padding: "1% 0% 0% 6%"}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="https://www.instagram.com/"><i className="bi bi-instagram" title = "Instagram"></i></a>
    <span className="navbar-brand font-weight">Instagram</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1 fw-bolder" id = "fh1">
          <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-door" title = "Home"></i></a>
        </li>
        <li className="nav-item mx-1 fw-bolder" id = "fh2">
          <a className="nav-link active"  aria-current="page" href="#"><i className="bi bi-search" title = "Search"></i></a>
        </li>
        <li className="nav-item mx-1 fw-bolder" id = "fh3">
          <a className="nav-link active"  aria-current="page" href="#"><i className="bi bi-chat-dots" title = "Chats"></i></a>
        </li>
        <li className="nav-item mx-1 fw-bolder" id = "fh5">
          <a className="nav-link active" href="#"><i className="bi bi-heart" title = "Notification"></i></a>
        </li>
        <li className="nav-item mx-1 fw-bolder">
          <a className="nav-link active" href="#"><img src = {images} alt = "" title = "Profile" className = "circle"/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>    
</div>
  )
}

export default NavBar
