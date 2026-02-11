import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="logo">ROSLA</Link>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Our products</Link>
                <Link to="/calculator">Carbon calculator</Link>
                <Link to="/consultation">Book consultation</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div className="nav-icons">
                <img src="/accessibility-icon.svg" alt="Accessibility" />
                <Link to="/signup">
                    <img src="/user-icon.svg" alt="Account" />
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
