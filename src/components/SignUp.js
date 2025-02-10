import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import axios from "axios";
import Navbar from "./Navbar"
import Footer from "./Footer";
import myImage from '../assets/profile.jpg';
import { toast } from "react-toastify";

function Signup() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const apiUrl = 'http://localhost:5000/';

    const navigate = useNavigate(); // Initialize navigation


    const onSubmit = async (data) => {
        try {
            const response = await axios.post(apiUrl + "user/createAccount", data);
            // setMessage(response.data.message);
            if (response.data.status === true) {
                toast.success(response.data.message);
                reset(); // Reset form after submission
                navigate("/signin")
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
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
                        <div class="px-5 py-3 mt-1">
                            <div class="px-2 py-2 align-middle">
                                <h2 className="signup-title">Sign Up</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            {...register("username", { required: "Username is required" })}
                                            className="form-input"
                                        />
                                        {errors.username && <p className="error">{errors.username?.message}</p>}
                                    </div>

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
                                        {errors.email && <p className="error">{errors.email?.message}</p>}
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
                                        {errors.password && <p className="error">{errors.password?.message}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input
                                            type="tel"
                                            {...register("mobileNumber", {
                                                required: "Mobile number is required",
                                                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" },
                                            })}
                                            className="form-input"
                                        />
                                        {errors.mobileNumber && <p className="error">{errors.mobileNumber?.message}</p>}
                                    </div>

                                    <button type="submit" className="signup-button">Register</button>
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

export default Signup;
