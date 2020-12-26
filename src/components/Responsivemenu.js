import React from "react";
import Dashboard from './Dashboard';
import Investment from './Investment';
import Cash from './Cash';
import Documents from './Documents';
import News from './News';
import Support from './Support';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Diamond from './Images/mint.png';
import Adminlogo from './Images/adminlogo.png';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div className="mobile-responsive">
        <div className="mobile-flex">
          <div className="mobile-logoset">
            <img src={Diamond} />
          </div>
          <div className="bar-menu">
            <i className="fa fa-bars" aria-hidden="true" onClick={() => { this.setState({ show: !this.state.show }) }}>{this.state.show ? '' : ''}</i>
          </div>
        </div>
        <div>
          {
            this.state.show ?
              <div className="mobile-sidebar">
                <div className="sidebar">
                  <nav>
                    <div className="userimage">
                      <img src={Adminlogo} />
                      <strong>Simon Smith</strong>
                      <span>INVT360</span>
                      <div className="other-menu">
                        <strong>Simon Smith</strong>
                        <span>INVT360</span>
                        <br></br>
                        <ul>
                          <li><i className="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;
              <Link to="/Profile">Profile Details</Link>
                          </li>
                          <li><i className="fa fa-sign-out" aria-hidden="true"></i> &nbsp;
              <Link to="/">Logout</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul>
                      <li><i className="fa fa-tachometer" aria-hidden="true"></i> &nbsp;
              <Link to="/">User Dashboard</Link>
                      </li>
                      <li>
                        <i className="fa fa-sitemap" aria-hidden="true"></i> &nbsp;
              <Link to="/Investment">Investment Option</Link>
                      </li>
                      <li><i className="fa fa-money" aria-hidden="true"></i> &nbsp;
              <Link to="/Cash">Cash & Transections</Link>
                      </li>
                      <li><i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;
              <Link to="/Documents">Documents</Link>
                      </li>
                      <li><i className="fa fa-newspaper-o" aria-hidden="true"></i> &nbsp;
              <Link to="/News">News & Research</Link>
                      </li>
                      <li><i className="fa fa-support" aria-hidden="true"></i> &nbsp;
              <Link to="/Support">Support</Link>
                      </li>
                    </ul>
                  </nav>
                  <Switch>
                    <Route path="/Profile">
                      <Profile />
                    </Route>
                    <Route path="/Portfolio">
                      <Portfolio />
                    </Route>
                    <Route path="/Support">
                      <Support />
                    </Route>
                    <Route path="/News">
                      <News />
                    </Route>
                    <Route path="/Documents">
                      <Documents />
                    </Route>
                    <Route path="/Investment">
                      <Investment />
                    </Route>
                    <Route path="/Cash">
                      <Cash />
                    </Route>
                    <Route path="/">
                      <Dashboard />
                    </Route>
                  </Switch>
                </div>
              </div> : null
          }

        </div>

      </div>
    );
  }
}

export default App;