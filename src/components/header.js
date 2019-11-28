import { Link } from 'gatsby';
import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const { showMenu } = this.state;
    return (
      <header>
        <div className="navbar">
          <ul className="ul-list">
            <li className="links">
              <Link className="links" to="/">
                <button type="button" className="button-links-nav">HOME</button>
              </Link>
            </li>
            <li className="links">
              <Link className="links" to="/#projects">
                <button type="button" className="button-links-nav"> PROJECTS</button>
              </Link>
            </li>
            <li className="links">
              <Link className="links" to="/#tech">
                <button type="button" className="button-links-nav">ABOUT</button>
              </Link>
            </li>
            {/* <li className="links">
              <Link className="links" to="/writings/">
                <button type="button" className="button-links">WRITINGS</button>
              </Link>
            </li> */}
            <li className="links">
              <Link className="links" to="/contact/">
                <button type="button" className="button-links-nav">CONTACT</button>
              </Link>
            </li>
          </ul>
          <div className="nav-flex-burger">
            <button type="button" className="icon" onClick={this.showMenu}>
              <i className="fa fa-bars" />
            </button>
            <div>
              {showMenu ? (
                <div className="menu">
                  <div>
                    <Link to="/">
                      <button type="button" className="button-links">Home</button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/#projects">
                      <button type="button" className="button-links">Projects</button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/#tech">
                      <button type="button" className="button-links">About</button>
                    </Link>
                  </div>
                  {/* <div>
                    <Link to="/writings/">
                      <button type="button" className="button-links">Writings</button>
                    </Link>
                  </div> */}
                  <div>
                    <Link to="/contact/">
                      <button type="button" className="button-links">Contact</button>
                    </Link>
                  </div>
                  {/* <div>
                    <Link to="/resume/">
                      <button type="button" className="button-links">Resume</button>
                    </Link>
                  </div> */}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
