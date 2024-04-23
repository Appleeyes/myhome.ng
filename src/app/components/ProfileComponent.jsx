import React from "react";
import '../assets/css/ProfileComponent.css';
import ArrowBack from '../components/ArrowBackComponent';
import ArrowRight from '../assets/images/arrow-right.svg';
import Footer from '../components/Footer';

function ProfileComponent({
    fullName,
    PhoneNumber,
    EmailAddress,
    passwordLink,
    imageSrc,
    imageAlt,
    flexLayout = false,
    additionalContent,
    actions,
}) {
    const handleActionClick = () => {
        console.log("Action clicked");
    };

    return (
        <div className={`profile-container${flexLayout ? ' flex-layout' : ''}`}>
            <div className="profile-header">
                <ArrowBack />
                <p>Profile</p>
            </div>
            <div className="profile">
                <div className="profile-info">
                    <img src={imageSrc} alt={imageAlt} />
                </div>
                <div className="profile-view">
                    <h3>Personal Info</h3>
                    <div className="display-view">
                        <h5>Full Name</h5>
                        <p>{fullName}</p>
                    </div>
                    <div className="display-view">
                        <h5>Phone Number</h5>
                        <p>{PhoneNumber}</p>
                    </div>
                    <div className="display-view">
                        <h5>Email Address</h5>
                        <p>{EmailAddress}</p>
                    </div>
                    <div className="display-view">
                        <h5>Change Pasword</h5>
                        <p><a href={passwordLink}><img src={ArrowRight} alt="Arrow Right Icon" /></a></p>
                    </div>
                </div>
            </div>
            {flexLayout && additionalContent && (
                <div className="additional-content">
                    {additionalContent.map((content, index) => (
                        <div key={index} className="additional-item">
                            {content}
                        </div>
                    ))}
                </div>
            )}
            <div className="actions-container">
                {actions && actions.map((action, index) => (
                    <div key={index} className="action-item" onClick={handleActionClick}>
                        <p>{action.title}</p>
                        <a href={action.link}>
                            <img src={ArrowRight} alt="Arrow Right Icon" />
                        </a>
                    </div>
                ))}
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default ProfileComponent;
