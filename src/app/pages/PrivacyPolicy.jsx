import React from 'react';
import "../assets/css/TermsAndConditions.css";
import ArrowBack from '../components/ArrowBackComponent';

function PrivacyPolicy() {
    return (
        <div className='terms-container'>
            <div className='head'>
                <ArrowBack />
                <p>Privacy Policy</p>
            </div>
            <span>At Myhome.ng, we are committed to protecting
                your privacy. This Privacy Policy outlines how
                we collect, use, disclose, and safeguard your
                personal information.</span>
            <ol>
                <li>Information We Collect: We may collect
                    personal information such as your name, email
                    address, phone number, and financial
                    information when you register an account, use
                    our services, or communicate with us.</li>
                <li>
                    How We Use Your Information: We may use
                    the information we collect from you to:
                    <ul>
                        <li>Provide and personalize our services.</li>
                        <li>Process transactions.</li>
                        <li>Communicate with you.</li>
                        <li>Improve our services.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </li>
                <li>Sharing Your Information: We may share your
                    personal information with third parties,
                    including real estate developers, agents, and
                    financial institutions, for the purposes described
                    in this Privacy Policy.</li>
                <li>Security: We take reasonable measures to
                    protect your personal information from
                    unauthorized access, use, or disclosure.</li>
                <li>Third-Party Links: Our App may contain links
                    to third-party websites or services. We are not
                    responsible for the privacy practices or content
                    of these third-party sites.</li>
                <li>Children's Privacy: Our services are not
                    directed to individuals under the age of 18. We
                    do not knowingly collect personal information
                    from children under 18.</li>
                <li> Changes to this Privacy Policy: We may
                    update our Privacy Policy from time to time. We
                    will notify you of any changes by posting the
                    new Privacy Policy on this page.</li>
                <li>Contact Us: If you have any questions or
                    concerns about our Privacy Policy, please
                    contact us at myhome.ng@gmail.com.</li>
            </ol>
        </div>
    );
}

export default PrivacyPolicy;
