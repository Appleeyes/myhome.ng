import React from "react";
import '../assets/css/ProfileComponent.css';
import ArrowLeft from '../assets/images/arrow-left.svg';
import ArrowRight from '../assets/images/arrow-right.svg';

function ProfileComponent({
    fullName,
    imageSrc,
    imageAlt,
    flexLayout = false,
    additionalContent,
    actions
}) {
    const handleActionClick = () => {
        console.log("Action clicked");
    };

    return (
        <div className={`profile-container${flexLayout ? ' flex-layout' : ''}`}>
            <div className="profile-header">
                <img src={ArrowLeft} alt="Arrow Left Icon" />
                <p>Profile</p>
            </div>
            <div className="profile">
                <div className="profile-info">
                    <img src={imageSrc} alt={imageAlt} />
                    <h3>{fullName}</h3>
                </div>
                <div className="profile-view">
                    <h3>Personal Info</h3>
                    <div className="display-view">
                        <h5>First Name</h5>
                        <p>
                            <span></span>
                            <hr />
                        </p>
                    </div>
                    <div className="display-view">
                        <h5>Last Name</h5>
                        <p>
                            <span></span>
                            <hr />
                        </p>
                    </div>
                    <div className="display-view">
                        <h5>Phone Number</h5>
                        <p>
                            <span></span>
                            <hr />
                        </p>
                    </div>
                    <div className="display-view">
                        <h5>Email Address</h5>
                        <p>
                            <span></span>
                            <hr />
                        </p>
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
        </div>
    )
}

export default ProfileComponent;
