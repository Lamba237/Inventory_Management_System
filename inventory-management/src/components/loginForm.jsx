import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { 
            register, 
            handleSubmit,
            formState: { errors, isSubmitting },
            reset,
        } = useForm();
    
        //Handle form submission
        const onSubmit = async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            reset(); // Resets the form after submission
        }
    
    
    return (
        <>

        <div className="greetings-note">
            <img src="./src/assets/Logo(1).svg" />
            <div className="text-container">
                <h1 className="h1-text">Log in to your account</h1>
                <p>Welcome back! Please enter your details</p>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form-container">
           <label>Email</label>
            <br />
            <input 
            {
                ...register("email", {
                    required: "Invalid email address",
                    validate: (value) => {
                        if (!value.includes("@")) {
                            return "Email must contain @";
                        }
                        return true;
                    },
                    pattern: {
                        value: /^[A-Z0-9 ._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                })}
             className="email-field input-fields" type="email" placeholder="user@gmail.com" />
             {errors.email && (
                <div className="error-500">{errors.email.message}</div>
             )}
            <br></br>
            <label>Password</label>
            <br></br>
            <input {

                ...register("password",
                    {required:  "Password must be atleast 6 characters",
                    minLength: {
                        value: 6,
                        message: "Password must be atleast 6 characters"
                    },
                    })
             } className="password-field input-fields" type="password" placeholder="********" />
             {errors.password && (
                <div className="error-500">{errors.password.message}</div>
             )}
            <br></br>
            
            <div className="inline">
                <label><input {...register("checkbox")} type="checkbox" className="checkboc"/><span>Remember for 30 days</span></label>
                <a href="./" className="forgot-password">Forgot password</a>
            </div>
            <br />
            <button disabled={isSubmitting} type="submit" name="signIn-btn" className="btn">
               {isSubmitting ? "Loading..." : "Sign in"}
            </button>
        </form>
        </>
    )
    }