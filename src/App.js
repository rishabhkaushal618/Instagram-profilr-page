import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Stories from "./My Stories/Stories";
import NavBar from "./Nav/NavBar";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";

function App() { 
    
    const [user, setuser] = useState([]);
   
    useEffect(() => {
        fetch('https://reqres.in/api/users/5').then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                setuser(data);
                console.log("Rishabh Kaushal 2");
            }
        )
    }, []);

  return (
    <> 
        <NavBar />
        <Profile  user= { user } />
        <Stories />
        <Posts />
        <Routes>
            <Route path= "/home" element= { <Home /> } />
        </Routes>
    </>
  );
} 

export default App;
