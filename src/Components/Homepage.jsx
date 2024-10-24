import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

function HomePage() {
    return (
        // code for homepage only
        <div>
        <header>
            <h1>Workfolio</h1>
            <Link to="LoginPage">
            <button type="submit" id ="loginbtn"  >Login</button>
            </Link>
            <Link to="SignupPage">
            <button type="submit" id ="signbtn"  >Sign Up</button>
            </Link>

        </header>
        
            <p>this is homepage</p>
          
        </div >
        
    );
}

export default HomePage;