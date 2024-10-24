import React from "react";
import { Link } from "react-router-dom";
import SignupPage from "./SignupPage";

function LoginPage() {
    return (
        // Code for login page


        <div class="login-form">
            <h2> Log In</h2>
            <form>
                <input type="email" placeholder="Email Address" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit">Log In</button>
                <a href="#" class="forgot-password">Forgot Password?</a>
            </form>

            <p>Don,t Have account <Link to="/SignupPage">Signup</Link> </p>

        </div>
    );
}
export default LoginPage;