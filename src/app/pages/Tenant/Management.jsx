import '../../assets/css/PropertyManagement.css';
import ArrowBack from '../../components/ArrowBackComponent';
import BellIcon from '../../assets/images/bell.svg';
import Button from "../../components/ButtonComponent";
import Woman from '../../assets/images/profile-woman.png';
import Man from '../../assets/images/profile-man.png';
import Location from '../../assets/images/location.svg';
import Footer from '../../components/Footer';

function TenantManagement() {
    return (
        <div className='product-manage'>
            <div className="head">
                <ArrowBack />
                <p>Tenant Management</p>
                <a className='bell' href="/notification"><img src={BellIcon} alt="Bell Icon" /></a>
            </div>
            <div className='manage-buttons'>
                <Button className="button1" link="/product/management">Existing Listing</Button>
                <Button className="button2" link="/#">Add New Listing</Button>
            </div>
            <div className='manage-container'>
                <div className='manage-card'>
                    <div className="product-image tenant">
                        <img src={Woman} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,500,000</p>
                            <p>Apartment</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Lekki Phase 1, Admirality way</span>
                            </div>
                            <span>19/01/2024 - 19/01/2025</span>
                        </div>
                        <div className='second'>
                            <p className='rented'>Fully Paid</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image tenant">
                        <img src={Man} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,000,000</p>
                            <p>Apartment</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Banana Island, 5th Avenue</span>
                            </div>
                            <span>20/02/2024 - 20/02/2025</span>
                        </div>
                        <div className='second'>
                            <p className='rented'>Fully Paid</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image tenant">
                        <img src={Woman} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,500,000</p>
                            <p>Bungalow</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Ajao Estate, Ajani Street</span>
                            </div>
                            <span>23/04/2024 - 20/04/2025</span>
                        </div>
                        <div className='second'>
                            <p className='rented vacant'>Not Paid</p>
                        </div>
                    </div>
                </div>
                <div className='manage-card'>
                    <div className="product-image tenant">
                        <img src={Man} alt="Manage property" />
                    </div>
                    <div className="product-content">
                        <div className='first'>
                            <p>#1,500,000</p>
                            <p>Storey Building</p>
                            <div className='manage-loc'>
                                <img src={Location} alt="Location Icon" />
                                <span>Apapa, Marine Beach Street</span>
                            </div>
                            <span>26/04/2024 - 26/04/2025</span>
                        </div>
                        <div className='second'>
                            <p className='rented'>Not Paid</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default TenantManagement;