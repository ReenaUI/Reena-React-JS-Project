import React from "react";
import Dashboard from './Dashboard';
import Investment from './Investment';
import Cash from './Cash';
import Documents from './Documents';
import News from './News';
import Support from './Support';
// import Audit from './Audit';
import Showmemore from './Showmemore';
import Responsivemenu from './Responsivemenu';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Faq from './Faq';
import Diamond from './Images/mint.png';
import MakeTransaction from './MakeTransaction';
import Adminlogo from './Images/adminlogo.png';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Make_Investment from "./Transactions/Make_Investment";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Sidebar() {
  return (

    <Router>
      <Responsivemenu />
      <div className="sidebar screen-sidebar">


        <nav>
         <div className="fix-nav">
          <div className="logoset">
            <img src={Diamond} />
          </div>
          <div>
          <div className="userimage">
            <img src={Adminlogo} />
            <strong>Simon Smith</strong>
            <span>INVT360</span>
            <div className="other-menu">
              <strong>Simon Smith</strong>
              <span>INVT360</span>
              <br></br>
              <ul className="profile-details">
                <li><i className="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;
              <Link to="/Profile">Profile Details</Link>
                </li>
                <li><i className="fa fa-sign-out" aria-hidden="true"></i> &nbsp;
              <Link to="/">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li><i className="fa fa-address-card-o" aria-hidden="true"></i> &nbsp;
              <Link to="/">User Dashboard</Link>
            </li>
            <li>
              <i className="fa fa-sitemap" aria-hidden="true"></i> &nbsp;
              <Link to="/Investment">Investment Option</Link>
            </li>
            <li><i className="fa fa-money" aria-hidden="true"></i> &nbsp;
              <Link to="/Cash">Cash & Transections</Link>
            </li>
            <li><i className="fa fa-file-pdf-o red" aria-hidden="true"></i> &nbsp;
              <Link to="/Documents">Documents</Link>
            </li>
            <li><i className="fa fa-newspaper-o" aria-hidden="true"></i> &nbsp;
              <Link to="/News">News & Research</Link>
            </li>
            <li><i className="fa fa-support" aria-hidden="true"></i> &nbsp;
              <Link to="/Support">Support</Link>
            </li>
            {/* <li><i className="fa fa-table" aria-hidden="true"></i>
          &nbsp;
              <Link to="/Audit">Audit</Link>
            </li> */}
            {/* <li><i className="fa fa-external-link" aria-hidden="true"></i>
 &nbsp;
              <Link to="/Showmemore">Show me more</Link>
            </li> */}
            
          </ul></div>
        </div>
          </nav>
        <Switch>
        <Route path="/Showmemore">
            <Showmemore />
          </Route>
        
        <Route path="/Profile">
            <Profile />
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
          <Route exact to path="/">
            <Dashboard />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Faq">
            <Faq />
          </Route>
          <Route path="/MakeTransaction">
            <MakeTransaction />
          </Route>
          <Route path="/Make_Investment">
              <Make_Investment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

