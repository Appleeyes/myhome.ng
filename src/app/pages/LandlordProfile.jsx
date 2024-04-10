import ProfileComponent from '../components/ProfileComponent';
import '../assets/css/LandlordProfile.css';
import Activity1 from '../assets/images/activity1.svg';
import Activity2 from '../assets/images/activity2.svg';
import Activity3 from '../assets/images/activity3.png';
import ProfileMan from '../assets/images/profile-man.png';
import Footer from '../components/Footer';


function LandlordProfile() {
    const actions = [
        { title: "Complete Your Profile", link: "/#" },
        { title: "Check Your Eligibility Status", link: "/#" },
        { title: "Upload Document", link: "/#" },
        { title: "Premium Listing", link: "/#" }
    ];

    return (
        <div className="landlord-profile">
            <ProfileComponent
                fullName="Bola Ahmad"
                imageSrc={ProfileMan}
                imageAlt="Profile Image"
                flexLayout={true}
                additionalContent={[<div className='activity'>
                    <div className='activity-item'>
                        <img src={Activity1} alt="Activity Icon" />
                        <p>Property Management</p>
                    </div>
                    <div className='activity-item'>
                        <img src={Activity2} alt="Activity Icon" />
                        <p>Tenant Management</p>
                    </div>
                    <div className='activity-item'>
                        <img src={Activity3} alt="Activity Icon" />
                        <p>Performance and reviews</p>
                    </div>
                </div>]}
                actions={actions}
            />
            <Footer />
        </div>
    );
}

export default LandlordProfile;