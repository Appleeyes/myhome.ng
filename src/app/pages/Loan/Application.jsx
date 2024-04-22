import '../../assets/css/LoanApplication.css';
import ArrowBack from '../../components/ArrowBackComponent';
import Button from '../../components/ButtonComponent';
import PriceFilter from '../../components/PriceFilter';
import DateFilter from '../../components/DateFilter ';
import Footer from '../../components/Footer';

function Application() {
    return (
        <div className="application">
            <div className='head'>
                <ArrowBack />
                <h3>Request a specific amount</h3>
                <span>Fill in the following options to establish how much you want to borrow to buy a house and how long.</span>
                <div className='filter'>
                    <div className='loan-elig'>
                        <p>Loan Amount</p>
                        <p>#600,000</p>
                    </div>
                    <PriceFilter />
                    <div className='loan-elig'>
                        <p>Loan Term</p>
                        <p>10 months</p>
                    </div>
                    <DateFilter />
                </div>
            </div>
            <div className='tail'>
                <div className='card'>
                    <div className='card1'>
                        <span>Interest</span>
                        <p>#1500 (5%)</p>
                    </div>
                    <a href="/#">View Details</a>
                </div>
                <div className='card'>
                    <div className='card1'>
                        <span>Total Due</span>
                        <p>#12,750</p>
                    </div>
                    <a href="/#">View Details</a>
                </div>
                <div className='button'>
                    <Button link="/loan/process">Continue</Button>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Application;