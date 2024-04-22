import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/css/Settings.css';
import ArrowLeft from '../assets/images/arrow-left.svg';
import ProfileHouse from '../assets/images/setting-house.png';
import ProfileWoman from '../assets/images/setting-woman.png';
import Notification from '../assets/images/notification.svg';
import Offer from '../assets/images/offer.svg';
import Agreement from '../assets/images/agreement.svg';
import Payment from '../assets/images/pay.svg';
import Terms from '../assets/images/terms.svg';
import Privacy from '../assets/images/privacy.svg';
import Help from '../assets/images/chat-help.svg';
import Logout from '../assets/images/logout.svg';
import ArrowRight from '../assets/images/arrow-right.svg';
import Footer from '../components/Footer';

function Settings() {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };
    return (
        <div className='settings'>
            <div className="head">
                <button className='arrow' onClick={goBack}>
                    <img src={ArrowLeft} alt="Arrow Left Icon" />
                </button>
                <p>Settings</p>
            </div>
            <div className='images'>
                <img className='house' src={ProfileHouse} alt="Profile House" />
                <div className='profile-pic'>
                    <img src={ProfileWoman} alt="ProfileWoman" />
                    <p>Fade James</p>
                </div>
            </div>
            <div className="options">
                <div className="action-item">
                    <div>
                        <img src={Notification} alt="Notification Icon" />
                        <p>Notification</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Offer} alt="Offer Icon" />
                        <p>Offer</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Agreement} alt="Agreement" />
                        <p>Agreement</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Payment} alt="Payment Icon" />
                        <p>Payment</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Terms} alt="Terms Icon" />
                        <p>Terms and Condition</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Privacy} alt="Privacy Icon" />
                        <p>Privacy Policy</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Help} alt="Help Icon" />
                        <p>Help and Support</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
                <div className="action-item">
                    <div>
                        <img src={Logout} alt="Logout Icon" />
                        <p>Logout</p>
                    </div>
                    <a href="/#">
                        <img src={ArrowRight} alt="Arrow Right Icon" />
                    </a>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Settings;