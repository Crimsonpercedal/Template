import { Link } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
    return (
        <div className="signup-container">
            {/* LEFT SIDE */}
            <div className="signup-form">
                <Link to="/" className="back-arrow">←</Link>

                <h1>SIGNUP</h1>

                <label>Username:</label>
                <input type="text" />

                <label>Email:</label>
                <input type="email" />

                <label>Password:</label>
                <input type="password" />

                <button className="signup-btn">Create Account</button>

                <p className="login-text">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="image-section">
                <div className="overlay"></div>
            </div>
        </div>
    );
}

export default Signup;
