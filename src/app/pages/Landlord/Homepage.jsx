import React from 'react';
import '../../assets/css/LandlordHomepage.css';
import ProfileWoman from '../../assets/images/profile-woman.png';
import BellIcon from '../../assets/images/bell.svg';
import Receipt from '../../assets/images/reciept.svg';
import FileUpload from '../../assets/images/file-upload.svg';
import PropertyManagement from '../../assets/images/home1.png';
import TenantManagement from '../../assets/images/activity2.svg';
import Performance from '../../assets/images/activity3.png';
import SearchComponent from '../../components/SearchComponent';
import Footer from '../../components/Footer';

function Homepage() {
    return (
        <div className='landlord-homepage'>
            <div className='landlord-head'>
                <div className='landlord-info'>
                    <a href="/landlord/profile"><img src={ProfileWoman} alt="Profile Imge" /></a>
                    <h3>Hello Fade,</h3>
                </div>
                <a href="/landlord/profile"><img src={BellIcon} alt="Bell Icon" /></a>
            </div>
            <SearchComponent />
            <div className='main-actions'>
                <a href="/#">
                    <img src={Receipt} alt="Receipt Icon" />
                    <p>Receipt Generation</p>
                </a>
                <a href="/#">
                    <img src={Performance} alt="Performance Icon" />
                    <p>Performance and reviews</p>
                </a>
                <a className='upload' href="/#">
                    <img src={FileUpload} alt="FileUpload Icon" />
                    <p>Upload Lease Agreement</p>
                </a>
                <a href="/#">
                    <img src={PropertyManagement} alt="Management Icon" />
                    <p>Property Management</p>
                </a>
                <a href="/#">
                    <img src={TenantManagement} alt="Management Icon" />
                    <p>Tenant Management</p>
                </a>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    );
}

export default Homepage;
