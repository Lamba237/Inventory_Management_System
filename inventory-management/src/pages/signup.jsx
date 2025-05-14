import React from "react";
import Logo from "../components/logo";
import "../styles/signup.css";
import Signup from "../components/signupForm";

export default function SignUp() {
    return (
        <div className="signup-form-container">
            <Logo />
            <div className="form-container">
            <Signup />
            </div>
        </div>
    );
}