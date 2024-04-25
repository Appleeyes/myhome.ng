import React from 'react';
import "../assets/css/TermsAndConditions.css";
import ArrowBack from '../components/ArrowBackComponent';

function TermsAndConditions() {
    return (
        <div className='terms-container'>
            <div className='head'>
                <ArrowBack />
                <p>Terms and Condition</p>
            </div>
            <ol>
                <li>Acceptance of Terms: By accessing or using Myhome.ng, you agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this App.</li>
                <li>User Eligibility: You must be at least 18 years old to use this App. By using this App, you represent and warrant that you are at least 18 years old.</li>
                <li>User Account: To access certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.</li>
                <li>Use of Services: You agree to use the services provided by Myhome.ng solely for lawful purposes and in accordance with these Terms and Conditions. You shall not use the App for any illegal or unauthorized purpose nor engage in any activity that interferes with the proper working of the App.</li>
                <li>Intellectual Property: All content included in or made available through the App, such as text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Myhome.ng or its content suppliers and is protected by Nigerian and international copyright laws.</li>
                <li>
                    Prohibited Activities: You shall not engage in any of the following prohibited activities:
                    <ul>
                        <li>Use the App in any manner that could disable, overburden, damage, or impair the App or interfere with any other party's use of the App.</li>
                        <li>Attempt to gain unauthorized access to any part of the App, accounts, computer systems, or networks connected to the App.</li>
                        <li>Use any robot, spider, scraper, or other automated means to access the App for any purpose without our express written permission.</li>
                    </ul>
                </li>
                <li> Modification of Term: Myhome.ng reserves the right to modify or revise these Terms and Conditions at any time. Your continued use of the App following the posting of any changes constitutes acceptance of those changes.</li>
                <li>Termination: Myhome.ng reserves the right to terminate or suspend your access to the App at any time without prior notice for any reason, including violation of these Terms and Conditions.</li>
                <li>Governing Law: These Terms and Conditions shall be governed by and construed in accordance with the laws of Nigeria.</li>
            </ol>
        </div>
    );
}

export default TermsAndConditions;
