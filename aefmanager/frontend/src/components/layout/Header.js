import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            SDAM
          </Link>
        </li>
          <li className="nav-item">
          <Link to="/survey-wizard" className="nav-link">
            Survey Wizard
          </Link>
        </li>
          <li className="nav-item">
          <Link to="/polls" className="nav-link">
          Inner Compass
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/radar" className="nav-link">
          Radar Graph
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/polar" className="nav-link">
        Polar Graph
      </Link>
    </li>
        <span className="navbar-text mr-3">

          <strong>{user ? `Welcome ${user.first_name}` : ""}</strong>
        </span>
          <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
        <Navbar color="faded" light>
          <NavbarBrand href="#" className="mr-auto">
              Erasmus+ Cross-Borders Partnership

          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#/help">Help</NavLink>
              </NavItem>
                <NavItem>
                <NavLink href="#/about">About</NavLink>
              </NavItem>
            <div> {isAuthenticated ? authLinks : guestLinks} </div>
            </Nav>
          </Collapse>
        </Navbar>
/*
*
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Erasmus+ Cross-Borders Partnership
            </a>
            <div> {isAuthenticated ? authLinks : guestLinks} </div>
          </div>
        </div>
      </nav>
* */
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
