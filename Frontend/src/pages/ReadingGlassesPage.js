// src/pages/ReadingGlassesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ReadingGlassesPage.css';

const readingGlasses = [
    {
        id: 1,
        name: 'Reading Glasses A',
        image: '/images/read/ra.png',
        description: 'Comfortable reading glasses for everyday use.',
        price: '$20',
        company: 'Read Well',
        deliveryDate: '2024-10-29',
    },
    {
        id: 2,
        name: 'Reading Glasses B',
        image: '/images/read/rb.png',
        description: 'Stylish reading glasses with a modern design.',
        price: '$25',
        company: 'Stylish Specs',
        deliveryDate: '2024-10-30',
    },
    {
        id: 3,
        name: 'Reading Glasses C',
        image: '/images/read/rc.png',
        description: 'Lightweight and durable reading glasses.',
        price: '$30',
        company: 'Durable Frames',
        deliveryDate: '2024-10-31',
    },
    {
        id: 4,
        name: 'Reading Glasses D',
        image: '/images/read/rd.png',
        description: 'High-quality lenses for clear vision.',
        price: '$35',
        company: 'Clear Vision',
        deliveryDate: '2024-11-01',
    },
    {
        id: 5,
        name: 'Reading Glasses E',
        image: '/images/read/re.png',
        description: 'Elegant reading glasses for professionals.',
        price: '$40',
        company: 'Elegant Eyes',
        deliveryDate: '2024-11-02',
    },
    {
        id: 6,
        name: 'Reading Glasses F',
        image: '/images/read/rf.png',
        description: 'Compact and portable reading glasses.',
        price: '$45',
        company: 'Portable Specs',
        deliveryDate: '2024-11-03',
    },
    {
        id: 7,
        name: 'Reading Glasses G',
        image: '/images/read/rg.png',
        description: 'Reading glasses with anti-reflective coating.',
        price: '$50',
        company: 'Reflective Free',
        deliveryDate: '2024-11-04',
    },
    {
        id: 8,
        name: 'Reading Glasses H',
        image: '/images/read/rh.png',
        description: 'Trendy glasses with flexible frames.',
        price: '$55',
        company: 'Trendy Frames',
        deliveryDate: '2024-11-05',
    },
    {
        id: 9,
        name: 'Reading Glasses I',
        image: '/images/read/ri.png',
        description: 'Budget-friendly reading glasses.',
        price: '$15',
        company: 'Budget Specs',
        deliveryDate: '2024-11-06',
    },
    {
        id: 10,
        name: 'Reading Glasses J',
        image: '/images/read/rj.png',
        description: 'Stylish frames for everyday reading.',
        price: '$22',
        company: 'Everyday Wear',
        deliveryDate: '2024-11-07',
    },
    {
        id: 11,
        name: 'Reading Glasses K',
        image: '/images/read/rk.png',
        description: 'Fashionable glasses with a comfortable fit.',
        price: '$28',
        company: 'Fashion Fit',
        deliveryDate: '2024-11-08',
    },
    {
        id: 12,
        name: 'Reading Glasses L',
        image: '/images/read/rl.png',
        description: 'Lightweight and trendy glasses for reading.',
        price: '$33',
        company: 'Trendy Reads',
        deliveryDate: '2024-11-09',
    },
];

const ReadingGlassesPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleOrderClick = (glass) => {
        // Navigate to order page and pass the product data
        navigate('/order', { state: { product: glass } });
    };

    const handleTryOnClick = (glass) => {
        // Navigate to virtual try-on page and pass the product data
        navigate('/virtual-try-on', { state: { product: glass } });
    };

    return (
        <div className="reading-glasses-page">
            <h1>Reading Glasses</h1>
            <p>Explore our collection of reading glasses!</p>
            <div className="reading-glasses-list">
                {readingGlasses.map(glass => (
                    <div key={glass.id} className="reading-glass-card">
                        <img src={glass.image} alt={glass.name} />
                        <h2>{glass.name}</h2>
                        <p>{glass.description}</p>
                        <p>Price: {glass.price}</p>
                        <p>Company: {glass.company}</p>
                        <p>Delivery Date: {glass.deliveryDate}</p>
                        <div className="button-group">
                            <button onClick={() => handleOrderClick(glass)}>Order Now</button>
                            <button onClick={() => handleTryOnClick(glass)}>Try On</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReadingGlassesPage;
