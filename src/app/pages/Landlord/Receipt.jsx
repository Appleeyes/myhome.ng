import ArrowBack from '../../components/ArrowBackComponent';
import '../../assets/css/ReceiptGeneration.css';
import Footer from '../../components/Footer';
import ReceiptCheck from '../../assets/images/receipt-check.svg'
import Download from '../../assets/images/download.svg'

function Receipt() {
    return (
        <div className="receipt-generation">
            <div className='head'>
                <ArrowBack />
                <p>Receipt Generation</p>
            </div>
            <div className="receipt">
                <div className='receipt-head'>
                    <img src={ReceiptCheck} alt="ReceiptCheck" />
                    <p>Paid Successful</p>
                </div>
                <div className='circle'>
                    <span className='circle1'></span>
                    <span className='circle2'></span>
                </div>
                <div className='receipt-body'>
                    <div className="first">
                        <ul>
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
                        </ul>
                    </div>
                    <div className="second">
                        <ul>
                            <li>
                                <h3>Amount</h3>
                                <p>NGN 1,000,000</p>
                            </li>
                        </ul>
                    </div>
                    <button>
                        <img src={Download} alt="Download Icon" />
                        Download Receipt
                     </button>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Receipt;