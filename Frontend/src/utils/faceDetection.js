import * as faceapi from 'face-api.js';

// Function to classify the face shape based on landmarks
const classifyFaceShape = (landmarks) => {
    // Add your logic to classify face shape based on landmarks here
    // For example:
    // Analyze landmarks to determine the face shape and set it accordingly
    const shape = "Example Shape"; // Replace with actual classification logic
    return shape;
};

// Function to give feedback based on the detected face shape
const giveFeedback = (shape) => {
    let feedback;
    switch (shape) {
        case 'Round':
            feedback = "You have a round face shape!";
            break;
        case 'Square':
            feedback = "You have a square face shape!";
            break;
        case 'Oval':
            feedback = "You have an oval face shape!";
            break;
        default:
            feedback = "Face shape could not be determined.";
    }
    return feedback;
};

// Main function to detect faces and analyze face shape
export const detectFace = async (videoElement, setFaceShape, setFeedback) => {
    const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();

    if (detections.length > 0) {
        const landmarks = detections[0].landmarks;
        const shape = classifyFaceShape(landmarks);
        setFaceShape(shape);
        const feedbackMessage = giveFeedback(shape);
        setFeedback(feedbackMessage);
    } else {
        // If no face is detected, provide a default face shape
        const defaultFaceShapes = ['Round', 'Square', 'Oval'];
        const randomShape = defaultFaceShapes[Math.floor(Math.random() * defaultFaceShapes.length)];
        setFaceShape(randomShape);
        setFeedback("Please try to show your face more clearly.");
    }
    requestAnimationFrame(() => detectFace(videoElement, setFaceShape, setFeedback));
};
