import React, { useState } from 'react';
import "../assets/css/Payment.css";
import ArrowBack from '../components/ArrowBackComponent';
import MasterCard from '../assets/images/mastercard.svg';
import VerveCard from '../assets/images/vervecard.svg';
import VisaCard from '../assets/images/visacard.svg';
import PaystackIcon from '../assets/images/paystack_icon.svg';
import Button from "../components/ButtonComponent";
import Footer from '../components/Footer';

function Payment() {
    const [selectedMethod, setSelectedMethod] = useState('paystack');

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    return (
        <div className='payment-method'>
            <div className='head'>
                <ArrowBack />
                <p>Payment</p>
            </div>
            <div className='methods'>
                <div className={`method ${selectedMethod === 'mastercard' ? 'selected' : ''}`} onClick={() => handleMethodSelect('mastercard')}>
                    <div className='method-left'>
                        <img src={MasterCard} alt="MasterCard" />
                        <p>Master Card</p>
                    </div>
                    <div className='method-right'>
                        <span></span>
                    </div>
                </div>
                <div className={`method ${selectedMethod === 'vervecard' ? 'selected' : ''}`} onClick={() => handleMethodSelect('vervecard')}>
                    <div className='method-left'>
                        <img src={VerveCard} alt="VerveCard" />
                        <p>Verve Card</p>
                    </div>
                    <div className='method-right'>
                        <span></span>
                    </div>
                </div>
                <div className={`method ${selectedMethod === 'visacard' ? 'selected' : ''}`} onClick={() => handleMethodSelect('visacard')}>
                    <div className='method-left'>
                        <img src={VisaCard} alt="VisaCard" />
                        <p>Visa Card</p>
                    </div>
                    <div className='method-right'>
                        <span></span>
                    </div>
                </div>
                <div className={`method ${selectedMethod === 'paystack' ? 'selected' : ''}`} onClick={() => handleMethodSelect('paystack')}>
                    <div className='method-left'>
                        <img src={PaystackIcon} alt="PaystackIcon" />
                        <p>Paystack</p>
                    </div>
                    <div className='method-right'>
                        <span></span>
                    </div>
                </div>
                <Button link="/payment/paystack">Continue</Button>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    );
}

export default Payment;
