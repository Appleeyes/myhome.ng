import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "../assets/css/Payment.css";
import ArrowBack from '../components/ArrowBackComponent';
import Footer from '../components/Footer';

function PaymentLoad() {
    const history = useHistory();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            history.push('/payment/paystack');
        }, 4000);

        return () => clearTimeout(redirectTimeout);
    }, [history]);

    return (
        <div className='payment-method paystack-method'>
            <div className='head'>
                <ArrowBack />
                <p>Payment</p>
            </div>
            <div className='load'>
                <p>Processing</p>
                <div className="loader"></div>
            </div>

            <Footer currentRoute={window.location.pathname} />
        </div>
    );
}

export default PaymentLoad;
