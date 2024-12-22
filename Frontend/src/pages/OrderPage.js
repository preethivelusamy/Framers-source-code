import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = () => {
    const location = useLocation();
    const product = location.state?.product;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    
    // Show QR code for the selected payment method
    const getQRCodeImage = () => {
        switch (paymentMethod) {
            case 'GPay':
                return '/images/gpay-qr.png'; // Make sure to add the QR image in the /public/images folder
            case 'UPI':
                return '/images/upi-qr.png'; // Make sure to add the QR image in the /public/images folder
            case 'Paytm':
                return '/images/paytm-qr.png'; // Make sure to add the QR image in the /public/images folder
            default:
                return '/images/default-qr.png'; // Default QR if no payment method is selected
        }
    };

    const handleOrderNow = () => {
        if (!paymentMethod) {
            alert('Please select a payment method!');
            return;
        }
        if (paymentMethod === 'GPay') {
            alert('Redirecting to GPay...');
            window.open('https://gpay.app/scan', '_blank'); // Replace with actual GPay API/URL
        } else if (paymentMethod === 'UPI') {
            alert('Redirecting to UPI Payment...');
            window.open('https://upi.app/scan', '_blank'); // Replace with actual UPI API/URL
        } else if (paymentMethod === 'Paytm') {
            alert('Redirecting to Paytm...');
            window.open('https://paytm.com/scan', '_blank'); // Replace with actual Paytm API/URL
        }
        console.log('Order placed:', { name, phone, email, address, product, paymentMethod });
        alert('Order placed successfully!');
    };

    return (
        <div className="order-page">
            <h1>Order Details</h1>
            <h2>Selected Glasses:</h2>
            {product && (
                <div className="product-details">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Price: <span>{product.price}</span></p>
                    <p>Company: <span>{product.company}</span></p>
                    <p>Delivery Date: <span>{product.deliveryDate}</span></p>
                </div>
            )}
            <h2>Enter Your Details:</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleOrderNow(); }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                ></textarea>
                <h2>Select Payment Method:</h2>
                <div className="payment-methods">
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="GPay"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <img src="/images/gpay.png" alt="Google Pay" className="payment-logo" /> Google Pay
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="UPI"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <img src="/images/upi.png" alt="UPI" className="payment-logo" /> UPI
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="Paytm"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <img src="/images/paytm.png" alt="Paytm" className="payment-logo" /> Paytm
                    </label>
                </div>
                
                {/* QR code with tagline */}
                <div className="payment-qr">
                    <h3>Pay using QR Code</h3>
                    <p>Scan the QR code to complete your payment</p>
                    <img src="/images/qr.png" alt="Payment QR" className="qr-code" />
                </div>

                <button type="submit">Order Now</button>
            </form>
        </div>
    );
};

export default OrderPage;
