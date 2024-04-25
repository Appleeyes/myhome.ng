import React from 'react';
import "../assets/css/Payment.css";
import CheckComplete from '../assets/images/receipt-check.svg'
import ArrowBack from '../components/ArrowBackComponent';
import Button from "../components/ButtonComponent";
import Footer from '../components/Footer';

function PaymentComplete() {
    return (
        <div className='payment-method paystack-method payment-complete'>
            <div className='head'>
                <ArrowBack />
                <p>Payment</p>
            </div>
            <div className='load complete'>
                <img src={CheckComplete} alt="CheckIcon" />
                <p>Paid Successfully</p>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
            </div>
            <div className='pay-but'>
                <Button link="/payment/receipt">Download Receipt</Button>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    );
}

export default PaymentComplete;
