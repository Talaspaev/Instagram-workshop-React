import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container h-flex">
          <NavLink to="" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <nav className="links">
            <ul>
              <li>
                <NavLink to="/feed" className="menu__links">Лента</NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="menu__links">Профиль</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
