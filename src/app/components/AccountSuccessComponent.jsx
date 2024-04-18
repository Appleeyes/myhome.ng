import Hand from '../assets/images/hand.png';
import Button from "../components/ButtonComponent";
import "../assets/css/AccountSuccessComponent.css";
import arrowLeft from '../assets/images/arrow-left.svg';

function AccountSuccessComponent({link, arrowBack}){
    return(
        <div className='account-success'>
            <div className='header'>
                <a href={arrowBack}><img src={arrowLeft} alt="arrowLeft icon" /></a>
            </div>
            <img src={Hand} alt="Hand Icon" />
            <h3>Account Created</h3>
            <p>Your account has been created successfully, Get started on the app.</p>
            <Button link={link}>Get Started</Button>
        </div>
    )
}

export default AccountSuccessComponent;