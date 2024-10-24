import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
    return (
        <div>
            <h2>Register Here </h2>
            <form action="">
                <label htmlFor="Full Name" id = "name">Full Name</label>
                <input type="text" id ="name" />
                <br />
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required/>
                <br />
                <label htmlFor="Email" id = "email">Email</label>
                <input type="email" id ="email" />
                <br />
                <label htmlFor="Password" id = "pass">Password</label>
                <input type="email" id ="pass" />
                <br />
                <button>Register</button>
            </form>
        </div>
    );
}
export default SignupPage;

