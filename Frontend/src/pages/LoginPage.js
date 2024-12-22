import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // navigate function to go to home page

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic validation: check if email ends with '@gmail.com' and password is not empty
        if (email.endsWith('@gmail.com') && password.trim() !== '') {
            navigate('/home'); // Navigate to home page on successful login
        } else {
            alert('Invalid email or password'); // Show alert if credentials are invalid
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src='/images/login.png' alt="Person wearing glasses" />
            </div>
            <div className="login-form">
                <h2>Login to Framers</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register">Register Here</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
