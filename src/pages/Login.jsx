import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
    return (
        <div className="login-container">
            {/* LEFT SIDE */}
            <div className="login-form">
                <Link to="/" className="back-arrow">←</Link>

                <h1>LOGIN</h1>

                <label>Username / Email:</label>
                <input type="text" />

                <label>Password:</label>
                <input type="password" />

                <div className="remember-wrapper">
                    <label>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                </div>

                <button className="login-btn">Login</button>

                <a href="#" className="forgot-password">Forgot password?</a>

                <p className="signup-text">
                    Don’t have an account?
                    <Link to="/signup"> Signup</Link>
                </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="image-section">
                <div className="overlay"></div>
            </div>
        </div>
    );
}

export default Login;
