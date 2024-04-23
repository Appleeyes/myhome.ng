import '../../assets/css/PropertyManagement.css';
import ArrowBack from '../../components/ArrowBackComponent';
import BellIcon from '../../assets/images/bell.svg';
import Button from "../../components/ButtonComponent";
import Manage1 from '../../assets/images/hometype1.png';
import Manage2 from '../../assets/images/recommended2.png';
import Manage3 from '../../assets/images/recommended3.png';
import Manage4 from '../../assets/images/hometype3.png';
import Manage5 from '../../assets/images/hometype2.png';
import Location from '../../assets/images/location.svg';
import Footer from '../../components/Footer';

function Management() {
    return (
        <div className='product-manage'>
            <div className="head">
                <ArrowBack />
                <p>Property Management</p>
                <a className='bell' href="/notification"><img src={BellIcon} alt="Bell Icon" /></a>
            </div>
            <div className='manage-buttons'>
                <Button className="button1" link="/product/management">Existing Listing</Button>
                <Button className="button2" link="/#">Add New Listing</Button>
            </div>
            <div className='manage-container'>
                <div className='manage-card'>
                    <div className="product-image">
                        <img src={Manage1} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,500,000</p>
                            <p>Apartment</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Lekki Phase 1, Admirality way</span>
                            </div>
                        </div>
                        <div className='second'>
                            <p className='rented'>Rented</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image">
                        <img src={Manage2} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,000,000</p>
                            <p>Apartment</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Banana Island, 5th Avenue</span>
                            </div>
                        </div>
                        <div className='second'>
                            <p className='rented vacant'>Vacant</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image">
                        <img src={Manage3} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,500,000</p>
                            <p>Bungalow</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Ajao Estate, Ajani Street</span>
                            </div>
                        </div>
                        <div className='second'>
                            <p className='rented vacant'>Vacant</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image">
                        <img src={Manage4} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,500,000</p>
                            <p>Storey Building</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Apapa, Marine Beach Street</span>
                            </div>
                        </div>
                        <div className='second'>
                            <p className='rented'>Rented</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image">
                        <img src={Manage5} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#2,000,000</p>
                            <p>Bungalow</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Maryland, 3 Road Avenue</span>
                            </div>
                        </div>
                        <div className='second'>
                            <p className='rented'>Rented</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Management;