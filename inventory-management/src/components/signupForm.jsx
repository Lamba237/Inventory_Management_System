import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {

    const {
        register,
        handleSubmit,
        formState: {  errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        reset();
    }

    return (
        <>
            <div className="signup-note">
                <img src="./src/assets/Logo(1).svg" alt="company Logo" />
                <div className="text-container">
                    <h1 className="header-one">Create an account</h1>
                    <p className="paragraph-one">Start your 30-day free trail.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>Name*</label>
                <br />
                <input  {
                    ...register("text", {
                        required: {value: true, message: "Name is required"},
                        minLength: {
                            value: 6,
                            message: "Name must contain atleast 6 characters"
                        }
                    })} type="text" className="name-fields input-fields" placeholder="John Doe"/>
                    {errors.text && (
                        <div className="errors-500">{errors.text.message}</div>
                    )}
                <br />
                <label>Email*</label>
                <br />
                <input {
                    ...register("email",
                    {required: {value: true, message: "Email is required to proceed"},
                    validate: (value) => {
                        if (!value.includes("@")) {
                            return "Email must contain @";
                        }
                        return true;
                    },
                    pattern: {
                        value: /^[A-Z0-9 ._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    }
                    })
                } type="email" className="email-fields input-fields" placeholder="user@gmail.com"/>
                {errors.email && (
                    <div className="errors-500">{errors.email.message}</div>
                )}
                <br />
                <label>Password*</label>
                <br />
                <input 
                {
                    ...register("password",
                    {required: {value: true, message: "Password must be at atleast 6 characters"},
                    minLength: {
                        value: 6,
                        message: "Password must be atleast 6 characters"
                    },
                    })
                } type="password" className="password-field input-fields" placeholder="***********"/>
                {errors.password && (
                    <div className="errors-500">{errors.password.message}</div>
                )}

                <br />
                <button className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Loading..." : "Get started"}
                </button>
            </form>
        </>
    );
}