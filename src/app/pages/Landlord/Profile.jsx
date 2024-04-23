import ProfileComponent from '../../components/ProfileComponent';
import '../../assets/css/LandlordProfile.css';
import Activity1 from '../../assets/images/activity1.svg';
import Activity2 from '../../assets/images/activity2.svg';
import Activity3 from '../../assets/images/activity3.png';
import Activity4 from '../../assets/images/activity4.svg';
import ProfileMan from '../../assets/images/profile-man.png';
import Footer from '../../components/Footer';


function Profile() {
    return (
        <div className="landlord-profile">
            <ProfileComponent
                fullName="Bola Ahmad"
                PhoneNumber="090 XXX XXX XX"
                EmailAddress="bolaahmed@gmail.com"
                passwordLink="/settings"
                imageSrc={ProfileMan}
                imageAlt="Profile Image"
                flexLayout={true}
                additionalContent={[<div className='activity'>
                    <a href='/product/management' className='activity-item'>
                        <img src={Activity1} alt="Activity Icon" />
                        <p>Property Management</p>
                    </a>
                    <a href='/product/premium' className='activity-item'>
                        <img src={Activity4} alt="Activity Icon" />
                        <p>Premium Listing</p>
                    </a>
                    <a href='/product/performance' className='activity-item'>
                        <img src={Activity3} alt="Activity Icon" />
                        <p>Performance and reviews</p>
                    </a>
                    <a href='/user/management' className='activity-item'>
                        <img src={Activity2} alt="Activity Icon" />
                        <p>Tenant Management</p>
                    </a>
                </div>]}
            />
            <Footer />
        </div>
    );
}

export default Profile;