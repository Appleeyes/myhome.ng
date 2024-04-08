import './App.css';
import SignUp from './app/pages/SignUp';
import Login from './app/pages/Login';
import Onboarding from './app/pages/Onboarding';
import SignupRole from './app/pages/SignupRole';
import Access from './app/pages/Access';
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
      </Switch>
    </Router>
  );
}

export default App;
