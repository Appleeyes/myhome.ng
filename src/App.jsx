import './App.css';
import SignUp from './app/pages/SignUp';
import Login from './app/pages/Login';
import Onboarding from './app/pages/Onboarding';
import SignupRole from './app/pages/SignupRole';
import Access from './app/pages/Access';
import UserProfile from './app/pages/UserProfile';
import Footer from './app/components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/signup-role" component={SignupRole} />
        <Route path="/access" component={Access} />
        <Route path="/user/profile" component={UserProfile} />
      </Switch>
      <Footer currentRoute={window.location.pathname} />
    </Router>
  );
}

export default App;
