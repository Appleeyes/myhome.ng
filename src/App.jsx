import './App.css';
import SignUp from './app/pages/SignUp';
import Login from './app/pages/Login';
import Onboarding from './app/pages/Onboarding';
import SignupRole from './app/pages/SignupRole';
import Access from './app/pages/Access';
import UserProfile from './app/pages/UserProfile';
import LandlordProfile from './app/pages/LandlordProfile';
import UserHome from './app/pages/UserHomepage';
import LandlordHome from './app/pages/LandlordHomepage';
import HomeType from './app/pages/HomeType';
import Recommendation from './app/pages/Recommendation';
import Favourite from './app/pages/Favourite';
import ProductOverview from './app/pages/ProductOverview';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/signup-role" component={SignupRole} />
        <Route path="/access" component={Access} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/user/home" component={UserHome} />
        <Route path="/landlord/profile" component={LandlordProfile} />
        <Route path="/landlord/home" component={LandlordHome} />
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
