import '../../assets/css/UserHomepage.css';
import ProfileWoman from '../../assets/images/profile-woman.png';
import BellIcon from '../../assets/images/bell.svg';
import Home from '../../assets/images/home.svg';
import Loan from '../../assets/images/loan.svg';
import Apartment from '../../assets/images/apartment.svg';
import Home1 from '../../assets/images/home1.png';
import Home2 from '../../assets/images/home2.png';
import Location from '../../assets/images/location.svg';
import Love from '../../assets/images/love-icon.svg';
import Rating from '../../assets/images/rating.svg';
import SearchComponent from '../../components/SearchComponent';
import Footer from '../../components/Footer';

function Homepage() {
    return (
        <div className="user-homepage">
            <div className='user-head'>
                <div className='user-info'>
                    <a href="/user/profile"><img src={ProfileWoman} alt="Profile Imge" /></a>
                    <h3>Hello Fade,</h3>
                </div>
                <a href="/notification"><img src={BellIcon} alt="Bell Icon" /></a>
            </div>
            <SearchComponent />
            <div className='property-type'>
                <a href="/product/home">
                    <img src={Home} alt="Home" />
                    <p>House</p>
                </a>
                <a href="/product/home">
                    <img src={Apartment} alt="Apartment" />
                    <p>Popular</p>
                </a>
                <a href="/user/loan">
                    <img src={Loan} alt="Loan" />
                    <p>Loan</p>
                </a>
            </div>
            <div className='recommended'>
                <div className='rec-head'>
                    <h1>Recommended</h1>
                    <a href="/product/recommended">View all</a>
                </div>
                <div className='flex-prop'>
                    <div className='property'>
                        <div className='prop-img'>
                            <img src={Home2} alt="Home Thumbnail" />
                        </div>
                        <div className='down'>
                            <div className='house'>
                                <p>House</p>
                                <span>#15,000,000</span>
                            </div>
                            <div className='prop-loc'>
                                <img src={Location} alt="Location Icon" />
                                <p>Lekki Phase 1, Admirality way</p>
                                <div className='lov-img'>
                                    <img src={Love} alt="Love Icon" />
                                </div>
                            </div>
                            <div className='ratings'>
                                <img src={Rating} alt="Rating Icon" />
                            </div>
                        </div>
                    </div>
                    <div className='property'>
                        <div className='prop-img'>
                            <img src={Home1} alt="Home Thumbnail" />
                        </div>
                        <div className='down'>
                            <div className='house'>
                                <p>House</p>
                                <span>#40,000,000</span>
                            </div>
                            <div className='prop-loc'>
                                <img src={Location} alt="Location Icon" />
                                <p>Lekki Phase 1, Admirality way</p>
                                <div className='lov-img'>
                                    <img src={Love} alt="Love Icon" />
                                </div>
                            </div>
                            <div className='ratings'>
                                <img src={Rating} alt="Rating Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='popular'>
                <div className='pop-head'>
                    <h1>Popular</h1>
                    <a href="/product/recommended">View all</a>
                </div>
                <div className='flex-prop'>
                    <div className='property'>
                        <div className='prop-img'>
                            <img src={Home1} alt="Home Thumbnail" />
                        </div>
                        <div className='down'>
                            <div className='house'>
                                <p>House</p>
                                <span>#1,500,000</span>
                            </div>
                            <div className='prop-loc'>
                                <img src={Location} alt="Location Icon" />
                                <p>Lekki Phase 1, Admirality way</p>
                                <div className='lov-img'>
                                    <img src={Love} alt="Love Icon" />
                                </div>
                            </div>
                            <div className='ratings'>
                                <img src={Rating} alt="Rating Icon" />
                            </div>
                        </div>
                    </div>
                    <div className='property'>
                        <div className='prop-img'>
                            <img src={Home2} alt="Home Thumbnail" />
                        </div>
                        <div className='down'>
                            <div className='house'>
                                <p>House</p>
                                <span>#80,000,000</span>
                            </div>
                            <div className='prop-loc'>
                                <img src={Location} alt="Location Icon" />
                                <p>Lekki Phase 1, Admirality way</p>
                                <div className='lov-img'>
                                    <img src={Love} alt="Love Icon" />
                                </div>
                            </div>
                            <div className='ratings'>
                                <img src={Rating} alt="Rating Icon" />
                            </div>
                        </div>
                    </div>
                    <div className='property'>
                        <div className='prop-img'>
                            <img src={Home2} alt="Home Thumbnail" />
                        </div>
                        <div className='down'>
                            <div className='house'>
                                <p>House</p>
                                <span>#65,000,000</span>
                            </div>
                            <div className='prop-loc'>
                                <img src={Location} alt="Location Icon" />
                                <p>Lekki Phase 1, Admirality way</p>
                                <div className='lov-img'>
                                    <img src={Love} alt="Love Icon" />
                                </div>
                            </div>
                            <div className='ratings'>
                                <img src={Rating} alt="Rating Icon" />
                            </div>
                        </div>
                    </div>
                    <div className='property'>
                        <div className='prop-img'>
                            <img src={Home1} alt="Home Thumbnail" />
                        </div>
                        <div className='down'>
                            <div className='house'>
                                <p>House</p>
                                <span>#70,000,000</span>
                            </div>
                            <div className='prop-loc'>
                                <img src={Location} alt="Location Icon" />
                                <p>Lekki Phase 1, Admirality way</p>
                                <div className='lov-img'>
                                    <img src={Love} alt="Love Icon" />
                                </div>
                            </div>
                            <div className='ratings'>
                                <img src={Rating} alt="Rating Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Homepage;