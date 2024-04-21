import '../assets/css/Notification.css';
import ArrowLeft from '../assets/images/arrow-left.svg';
import BellIcon from '../assets/images/bell.svg';
import NotIcon from '../assets/images/nott-icon.svg';
import ErrorIcon from '../assets/images/error-icon.svg';
import Footer from '../components/Footer';

function Notification() {
    return (
        <div className="notification">
            <div className="head">
                <a href="/#"><img src={ArrowLeft} alt="Arrow Left Icon" /></a>
                <p>Notification</p>
                <a className='bell' href="/notification"><img src={BellIcon} alt="Bell Icon" /></a>
            </div>
            <div className='recent'>
                <p>Recent Notifications</p>
                <div className='not-card'>
                    <img src={NotIcon} alt="Not Icon" />
                    <div className='card-cont'>
                        <h1>Payment Successful</h1>
                        <p>Your transaction has been approved. Thank you.</p>
                    </div>
                </div>
                <div className='not-card'>
                    <img src={NotIcon} alt="Not Icon" />
                    <div className='card-cont'>
                        <h1>Eligibility status completed</h1>
                        <p>Your transaction has been approved. Thank you.</p>
                    </div>
                </div>
            </div>
            <div className='yesterday'>
                <p>Yesterday</p>
                <div className='not-card'>
                    <img src={ErrorIcon} alt="Error Icon" />
                    <div className='card-cont'>
                        <h1>Transaction Failed</h1>
                        <p>Your transaction has been approved. Thank you.</p>
                    </div>
                </div>
            </div>
            <div className='yesterday'>
                <p>Wednesday, May 22nd 2024</p>
                <div className='not-card'>
                    <img src={NotIcon} alt="Not Icon" />
                    <div className='card-cont'>
                        <h1>Verification completed</h1>
                        <p>Your transaction has been approved. Thank you.</p>
                    </div>
                </div>
            </div>
            <div className='yesterday wed'>
                <p>Wednesday, May 21st 2024</p>
                <div className='not-card'>
                    <img src={NotIcon} alt="Not Icon" />
                    <div className='card-cont'>
                        <h1>Verification completed</h1>
                        <p>Your transaction has been approved. Thank you.</p>
                    </div>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Notification;