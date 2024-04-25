import React, { useState } from "react";
import '../../assets/css/Premium.css';
import ArrowBack from '../../components/ArrowBackComponent';
import PremiumComponent from '../../components/PremiumComponent';
import PremiumCheck from '../../assets/images/premium-check.svg';
import Upload from '../../assets/images/file-upload.svg';
import PayStack from '../../assets/images/paystack.svg';
import Button from "../../components/ButtonComponent";
import Footer from '../../components/Footer';

function PremiumListing() {
    const [selectedPremium, setSelectedPremium] = useState(0);

    const handlePremiumSelect = (index) => {
        setSelectedPremium(index);
    };
    return (
        <div className='premium-listing'>
            <div className='head'>
                <ArrowBack />
                <h1>How It Works</h1>
            </div>
            <p><span>MyHome.NG</span> provides you with all the tools you need in listing and leasing your properties in three simple and easy steps.</p>
            <div className='premium-list'>
                <div className='list-cont'>
                    <img src={PremiumCheck} alt="Premium Check" />
                    <h5>Quick Sign-Up</h5>
                </div>
                <div className='list-cont'>
                    <img className='upload' src={Upload} alt="Premium Check" />
                    <h5>Uploading required Documents/Property</h5>
                </div>
                <div className='list-cont'>
                    <img src={PayStack} alt="Premium Check" />
                    <h5>Secure Payment</h5>
                </div>
            </div>
            <div className='list-bottom'>
                <div className='bott-cont'>
                    <h4>Premium Listing</h4>
                    <p>Select a premium Listing and increase the visibility of your property!</p>
                </div>
                <div className='premium-components'>
                    <PremiumComponent
                        PremiumTitle="Silver Listing"
                        PremiumPrice="NGN 100k"
                        listContents={[
                            "1 Month Validity",
                            "Front-line Visibility",
                            "Premium Positioning"
                        ]}
                        onClick={() => handlePremiumSelect(0)}
                        selected={selectedPremium === 0}
                    />
                    <PremiumComponent
                        PremiumTitle="Gold Listing"
                        PremiumPrice="NGN 200k"
                        listContents={[
                            "2 Month Validity",
                            "List Content 2",
                            "Premium Positioning"
                        ]}
                        onClick={() => handlePremiumSelect(1)}
                        selected={selectedPremium === 1}
                    />
                    <PremiumComponent
                        PremiumTitle="Platinum Listing"
                        PremiumPrice="NGN 300k"
                        listContents={[
                            "2 Month Validity",
                            "Front-line Visibility",
                            "Premium Positioning"
                        ]}
                        onClick={() => handlePremiumSelect(2)}
                        selected={selectedPremium === 2}
                    />
                </div>
                <Button link="/landlord/signup">Proceed To SignUp</Button>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default PremiumListing;