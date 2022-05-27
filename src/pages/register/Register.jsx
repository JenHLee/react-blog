import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <form className="registerForm">
                <span className="registerTitle">Register</span>     
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your Password..." />
                <button className="registerButton">Register</button>
            </form>
            
                <button className="registerLoginButton">
                    <Link className="link" to="/login">Login</Link>
                    </button>

        </div>
    )
}
