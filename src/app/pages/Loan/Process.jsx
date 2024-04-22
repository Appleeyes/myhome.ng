import '../../assets/css/Process.css';
import ArrowBack from '../../components/ArrowBackComponent';
import Footer from '../../components/Footer';

function Process() {
    return (
        <div className='user-process'>
            <div className='head'>
                <ArrowBack />
                <h3>Submit Loan request</h3>
                <span>Repayment will be automatically collected from the debit card linked to your account.</span>
            </div>

            <div className='loan-card'>
                <div className='card-details'>
                    <div className='card-detail'>
                        <span>Loan Amount</span>
                        <p>#300,000</p>
                    </div>
                    <div className='card-detail'>
                        <span>Duration</span>
                        <p>15 months</p>
                    </div>
                </div>
                <div className='card-details'>
                    <div className='card-detail'>
                        <span>Interest</span>
                        <p>#90,750</p>
                    </div>
                    <div className='card-detail'>
                        <span>Total Due</span>
                        <p>15 months</p>
                    </div>
                </div>
            </div>

            <form>
                <div className='input-container'>
                    <label htmlFor="">Purpose of loan</label>
                    <input type="text" />
                </div>
                <div className='input-container'>
                    <label htmlFor="">Bank Account Information</label>
                    <select>
                        <option value="">United Bank of Africa</option>
                        <option value="">Access Bank</option>
                        <option value="">First Bank of Nigeria</option>
                    </select>
                </div>
            </form>

            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Process;