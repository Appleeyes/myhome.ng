import './App.css';
import SignUp from './app/pages/Tenant/SignUp';
import Login from './app/pages/Tenant/Login';
import EmailVerify from './app/pages/Tenant/VerifyEmail';
import AccountSuccess from './app/pages/Tenant/AccountSuccess';
import LandlordSignUp from './app/pages/Landlord/SignUp';
import LandlordLogin from './app/pages/Landlord/Login';
import LandlordAccountSuccess from './app/pages/Landlord/AccountSuccess';
import Onboarding from './app/pages/Onboarding';
import SignupRole from './app/pages/SignupRole';
import Access from './app/pages/Access';
import Loan from './app/pages/Loan/Loan';
import LoanApplication from './app/pages/Loan/Application';
import LoanProcess from './app/pages/Loan/Process';
import UserProfile from './app/pages/Tenant/Profile';
import LandlordProfile from './app/pages/Landlord/Profile';
import UserHome from './app/pages/Tenant/Homepage';
import LandlordHome from './app/pages/Landlord/Homepage';
import HomeType from './app/pages/HomeType';
import Recommendation from './app/pages/Recommendation';
import Favourite from './app/pages/Favourite';
import ProductOverview from './app/pages/ProductOverview';
import LandlordEmailVerify from './app/pages/Landlord/VerifyEmail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/signup" exact component={SignUp} />
        <Route path="/user/login" component={Login} />
        <Route path="/signup-role" component={SignupRole} />
        <Route path="/access" component={Access} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/user/home" component={UserHome} />
        <Route path="/user/verify-email" component={EmailVerify} />
        <Route path="/user/account-success" component={AccountSuccess} />
        <Route path="/user/loan" component={Loan} />
        <Route path="/loan/apply" component={LoanApplication} />
        <Route path="/loan/process" component={LoanProcess} />
        <Route path="/landlord/signup" exact component={LandlordSignUp} />
        <Route path="/landlord/login" component={LandlordLogin} />
        <Route path="/landlord/profile" component={LandlordProfile} />
        <Route path="/landlord/home" component={LandlordHome} />
        <Route path="/landlord/verify-email" component={LandlordEmailVerify} />
        <Route path="/landlord/account-success" component={LandlordAccountSuccess} />
        <Route path="/product/home" component={HomeType} />
        <Route path="/product/recommended" component={Recommendation} />
        <Route path="/product/bookmarked" component={Favourite} />
        <Route path="/product/overview" component={ProductOverview} />
        <Route path="/" component={Onboarding} />
      </Switch>
    </Router>
  );
}

export default App;
