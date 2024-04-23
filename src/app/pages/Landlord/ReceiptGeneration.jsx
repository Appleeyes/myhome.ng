import ArrowBack from '../../components/ArrowBackComponent';
import '../../assets/css/ReceiptGeneration.css';
import Button from '../../components/ButtonComponent';
import Footer from '../../components/Footer';

function ReceiptGeneration(){
    return(
        <div className="receipt-generation">
            <div className='head'>
                <ArrowBack />
                <p>Tenant Payment Details</p>
            </div>
            <div className="receipt-details">
                <ul>
                    <li>
                        <h3>Property Type</h3>
                        <p>Apartment</p>
                    </li>
                    <li>
                        <h3>Property Location</h3>
                        <p>Banana Island</p>
                    </li>
                    <li>
                        <h3>Reference Number</h3>
                        <p>001174641146</p>
                    </li>
                    <li>
                        <h3>Date</h3>
                        <p>April 03, 2024</p>
                    </li>
                    <li>
                        <h3>Time</h3>
                        <p>11:19 AM</p>
                    </li>
                    <li>
                        <h3>Payment Method</h3>
                        <p>Master Card</p>
                    </li>
                    <li>
                        <h3>Amount</h3>
                        <p>NGN 1,000,000</p>
                    </li>
                </ul>
                <Button link="/payment/receipt">Generate Receipt</Button>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default ReceiptGeneration;