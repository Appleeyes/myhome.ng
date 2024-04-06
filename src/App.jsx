import './App.css';
import SignUp from './app/pages/SignUp';
import Login from './app/pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
