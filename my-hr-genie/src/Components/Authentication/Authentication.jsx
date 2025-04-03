import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import './Authentication.css'
import leftimage from '../../Assets/loginpageimage.png';
import brandlogo from '../../Assets/brandlogo.png';
const Authentication = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="hrms-authentication-css-container">
        <div className="row hrms-authentication-css rounded overflow-hidden">
            {/* Left Side Image */}
            <div className="col-md-6 p-0 hrms-authentication-css-left-image">
                <img
                    src={leftimage}
                    alt="Login Illustration"
                    className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="background-overlay">
                    <h3>Welcome to HR Management System.</h3>
                </div>
            </div>


            {/* Right Side Form */}
            <div className="col-md-6  p-5 d-flex flex-column  justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center" >
                    <img
                        src={brandlogo}
                        alt="No image"
                        className="img-fluid object-fit-cover"
                        style={{ maxWidth: "50%", height: "auto" }}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mt-4 mb-4">
                        <label className="form-label">User Name *</label>
                        <input
                            type="text"
                            className="form-control mt-2 hrms-authentication-button-outline-secondary"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <div className="input-group mt-2 hrms-authentication-button-outline-secondary  ">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control  border-0"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="input-group-text bg-transparent border-0"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEye size="1.5rem" /> :<AiOutlineEyeInvisible size="1.5rem" /> }
                            </button>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center mt-5" >
                      <button type="submit" className="btn-signin-button">Signin</button>
                    </div> 
                </form>
            </div>
        </div>
        
        <h6 className="text-center">Powered By myHRgenie</h6>
    </div>
  );
};

export default Authentication;
