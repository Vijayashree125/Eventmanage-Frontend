import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import Footer from "./Footer";
import myImage from '../assets/profile.jpg';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";


function SignIn() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message] = useState("");
    const apiUrl = 'http://localhost:5000/';

    const navigate = useNavigate(); // Initialize navigation


    const onSubmit = async (data) => {
        try {
            const response = await axios.post(apiUrl + "user/userLogin", data);
            // setMessage(response.data.message);
            console.log(response);
            if (response.data.status === true) {
                localStorage.setItem("authToken", response.data.data.authToken);
                localStorage.setItem("userId", response.data.data.userId)
                toast.success(response.data.message);
                reset(); // Reset form after submission
                navigate("/dashboard")
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            // setMessage("Error submitting form");
            toast.error("Error submitting form");
        }
    };

    return (
        <div>
            <Navbar />
            <div class="container-fluid ">
                <div class="row d-flex">
                    <div class="col align-middle">
                        <div class="px-2 py-2">
                            <img src={myImage} class="img-fluid" alt="..." />;
                        </div>
                    </div>
                    <div class="col">
                        <div class="px-5 py-5 mt-1">
                            <div class="px-2 py-2 align-middle">
                                <h2 className="signup-title">Sign In</h2>
                                {message && <p className="message">{message}</p>}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
                                            })}
                                            className="form-input"
                                        />
                                        {errors.email && <p className="error">{errors.email.message}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: { value: 6, message: "At least 6 characters" },
                                            })}
                                            className="form-input"
                                        />
                                        {errors.password && <p className="error">{errors.password.message}</p>}
                                    </div>
                                    <button type="submit" className="signup-button">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;
