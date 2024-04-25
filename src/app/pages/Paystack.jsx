import React, { useState } from 'react';
import "../assets/css/Payment.css";
import ArrowBack from '../components/ArrowBackComponent';
import PaystackLogo from '../assets/images/paystack_logo.svg'
import Button from "../components/ButtonComponent";
import Footer from '../components/Footer';

function Paystack() {
    const [selectedType, setSelectedType] = useState('Pay With Card');

    const handleClick = (type) => {
        setSelectedType(type);
    };
    return (
        <div className='payment-method paystack-method'>
            <div className='head'>
                <ArrowBack />
                <p>Payment</p>
            </div>
            <div className="paystack">
                <img src={PaystackLogo} alt="Paystack Logo" />
                <span>fadejames@gmail.com</span>
                <p>#1,000,000</p>
                <div className='buttonss'>
                    <button
                        className={selectedType === 'Pay With Card' ? 'active' : ''}
                        onClick={() => handleClick('Pay With Card')}
                    >
                        Pay With Card
                    </button>
                    <button
                        className={selectedType === 'Pay With Bank' ? 'active' : ''}
                        onClick={() => handleClick('Pay With Bank')}
                    >
                        Pay With Bank
                    </button>
                </div>
                <form action="">
                    <div className='input'>
                        <label htmlFor="">Card number</label>
                        <input type="number" placeholder='xxxx xxxx xxxx' />
                    </div>
                    <div className='input2'>
                        <div className='input'>
                            <label htmlFor="">Expiry date</label>
                            <input type="date" placeholder='MM/YY' />
                        </div>
                        <div className='input'>
                            <label htmlFor="">CVV</label>
                            <input type="number" placeholder='***' />
                        </div>
                    </div>
                </form>
                <Button link="/payment/load">Pay #1,000,000</Button>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    );
}

export default Paystack;
