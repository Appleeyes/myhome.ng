import React from 'react';
import Hand from '../assets/images/hand.png';
import Button from "../components/ButtonComponent";
import "../assets/css/AccountSuccessComponent.css";
import ArrowBack from '../components/ArrowBackComponent';

function AccountSuccessComponent({ link }) {
    return (
        <div className='account-success'>
            <div className='header'>
                <ArrowBack/>
            </div>
            <img src={Hand} alt="Hand Icon" />
            <h3>Account Created</h3>
            <p>Your account has been created successfully, Get started on the app.</p>
            <Button className="get-started" link={link}>Get Started</Button>
        </div>
    )
}

export default AccountSuccessComponent;