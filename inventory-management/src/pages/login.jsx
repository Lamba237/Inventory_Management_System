import React from "react";
import Logo from "../components/logo";
import Form from "../components/loginForm";
import '../styles/loginstyle.css';

export default function LoginForm() {
    return (
        <div className="Login-form-container">
            <Logo />
            
            <div className="form-container">
                <Form />
            </div>
        </div>
    )
}