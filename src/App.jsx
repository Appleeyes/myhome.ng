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
        <Route path="/" component={Onboarding} />
      </Switch>
    </Router>
  );
}

export default App;
