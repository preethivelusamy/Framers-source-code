import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './VirtualTryOnPage.css';

const feedbackMessages = [
    "This glass suits your face!",
    "This style is very trendy right now.",
    "These glasses enhance your features!",
    "Perfect choice for outdoor activities!",
    "These glasses add a touch of elegance.",
    "You look great in these!",
    "These frames really complement your look.",
    "This is a classic choice for any occasion.",
    "Stylish choice for a fashionable look!",
    "These frames are ideal for a casual day out.",
    "This design offers great protection for your eyes.",
    "These glasses are very comfortable to wear.",
    "These will keep you looking sharp!",
    "This is a popular choice among fashion enthusiasts.",
    "These frames make a statement!"
];

const faceShapes = ['Round', 'Oval', 'Square', 'Heart', 'Diamond', 'Oblong', 'Triangle'];

const VirtualTryOnPage = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [faceShape, setFaceShape] = useState(''); // Default face shape
    const [modelsLoaded, setModelsLoaded] = useState(false);

    useEffect(() => {
        // Start the camera
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setIsCameraActive(true);
                }
            } catch (error) {
                console.error("Error accessing the camera: ", error);
            }
        };
        startCamera();

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
            }
        };
    }, []);

    const loadModels = async () => {
        // Placeholder for model loading if needed in future
        setModelsLoaded(true);
    };

    useEffect(() => {
        loadModels();
    }, []);

    const giveFeedback = () => {
        const randomFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
        const shapeFeedback = faceShape ? `Your face shape is ${faceShape}.` : '';
        setFeedback(`${shapeFeedback} ${randomFeedback}`);
        displayGlasses();
    };

    const getRandomFaceShape = () => {
        // Randomly pick a face shape from predefined list
        const randomShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
        setFaceShape(randomShape);
    };

    const displayGlasses = () => {
        if (!product || !canvasRef.current || !videoRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const video = videoRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const image = new Image();
        image.src = product.image;
        image.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Adjusted size for the glasses
            const glassWidth = canvas.width * 0.3; // Reduced to 20% of the canvas width
            const glassHeight = canvas.height * 0.2; // Reduced to 10% of the canvas height

            // Centered position
            const x = (canvas.width - glassWidth) / 1.8;
            const y = canvas.height * 0.45;

            context.drawImage(image, x, y, glassWidth, glassHeight);
        };
    };

    return (
        <div className="virtual-try-on-page">
            <div className="left-panel">
                {product ? (
                    <div className="glass-preview">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Company: {product.company}</p>
                        <button onClick={giveFeedback}>Try On</button>
                    </div>
                ) : (
                    <p>No glass selected.</p>
                )}
            </div>

            <div className="center-panel">
                <video ref={videoRef} autoPlay playsInline className="camera-feed" />
                <canvas ref={canvasRef} className="overlay-canvas"></canvas>
                <button onClick={getRandomFaceShape} className="detect-button">
                    Detect Face Shape
                </button>
            </div>

            <div className="right-panel">
                <h2>Feedback</h2>
                <p>{feedback || 'Click "Try On" to get feedback!'}</p>
                <h3>Detected Face Shape: {faceShape || 'Click "Detect Face Shape" to get the result.'}</h3>
                <div className="chatbot-container">
                    <iframe
                        src="https://bot.orimon.ai/deploy/index.html?tenantId=0dcb661b-0281-499d-b628-838dbfdb37c7&testBot=true&defaultOpen=true"
                        width="100%"
                        height="300px" // Adjusted height for better view
                        style={{ border: 'none', borderRadius: '10px' }}
                        title="AI Chatbot"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VirtualTryOnPage;
