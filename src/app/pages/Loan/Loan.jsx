import '../../assets/css/Loan.css';
import arrowLeft from '../../assets/images/arrow-left.svg';
import Button from '../../components/ButtonComponent';
import Footer from '../../components/Footer';

function Loan() {
    return (
        <div className='user-loan'>
            <div className='head'>
                <a href="/user/home"><img
                    src={arrowLeft}
                    alt="Arrow Left Icon"
                    className="arrowLeft-icon"
                /></a>
                <p>Loan Overview</p>
            </div>

            <div className='loan-overview'>
                <a href="/loan/apply">Check Eligibility</a>
                <a href="/loan/apply">Loan calculator</a>
                <a href="/loan/apply">Apply Now</a>
            </div>

            <div className='my-loans'>
                <h3>My Loans</h3>
                <p>Your current loan</p>
                <div className='current-loan'>
                    <div className='details'>
                        <div className='status'>
                            <p>Loan 01</p>
                            <span>paid</span>
                        </div>
                        <p>Home Loan</p>
                        <span>#500,000</span>
                    </div>
                    <button>Details</button>
                </div>
                <div className='loan-details'>
                    <div className='loan-detail'>
                        <div className='amount'>
                            <p>Home Loan Payments</p>
                            <span>#230,000</span>
                        </div>
                        <div className='amount'>
                            <p>Monthly Pay</p>
                            <span>#30,000</span>
                        </div>
                    </div>
                    <div className='loan-detail'>
                        <div className='amount'>
                            <p>Home Loan Payments</p>
                            <span>#230,000</span>
                        </div>
                        <div className='amount'>
                            <p>Monthly Pay</p>
                            <span>#30,000</span>
                        </div>
                    </div>
                    <div className='loan-total'>
                        <div className='amount'>
                            <p>Max Total</p>
                            <span>#30,000</span>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <Button link="/#">Pay Money</Button>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Loan;