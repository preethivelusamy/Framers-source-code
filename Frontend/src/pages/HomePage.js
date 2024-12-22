// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Framers</h1>
            <p>Browse our collection of eyewear and try on your favorites virtually!</p>
            <Link to="/products">
                <button className="explore-button">Explore Products</button>
            </Link>
        </div>
    );
};

export default HomePage;
