import ProfileComponent from '../components/ProfileComponent';
import '../assets/css/UserProfile.css';
import UserAct from '../assets/images/user-activity.svg';
import ProfileWoman from '../assets/images/profile-woman.png';
import ArrowRight from '../assets/images/arrow-right.svg';
import Footer from '../components/Footer';


function UserProfile() {
    const actions = [
        { title: "Complete Your Profile", link: "/#" },
        { title: "Check Your Eligibility Status", link: "/#" },
        { title: "Upload Document", link: "/#" },
        { title: "Verification", link: "/#" }
    ];

    return (
        <div className="user-profile">
            <ProfileComponent
                fullName="Fade James"
                imageSrc={ProfileWoman}
                imageAlt="Profile Image"
                flexLayout={true}
                additionalContent={[<div className='activity'>
                    <img src={UserAct} alt="User Activity Icon" />
                    <div className=''>
                        <h5>My Activity</h5>
                        <div className='activity-down'>
                            <p>View your recent property searches and activities</p>
                            <a href="/user/profile/#"><img src={ArrowRight} alt="Arrow Right Icon" /></a>
                        </div>
                    </div>
                </div>]}
                actions={actions}
            />
            <Footer/>
        </div>
    );
}

export default UserProfile;