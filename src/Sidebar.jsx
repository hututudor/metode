import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class Sidebar extends React.Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? 'active' : '';
  };

  getNavLinkRelClass = path => {
    return this.props.location.pathname.includes(path) ? 'active' : '';
  };

  render() {
    return (
      <div className="sidebar">
        <h1>Metode de programare</h1>

        <ul>
          <li className={this.getNavLinkClass('/')}>
            <NavLink exact to="/">
              Acasa
            </NavLink>
          </li>
          <li className={this.getNavLinkClass('/m/greedy')}>
            <NavLink exact to="/m/greedy">
              Metoda Greedy
            </NavLink>
          </li>
          <li className={this.getNavLinkClass('/m/backtracking')}>
            <NavLink exact to="/m/backtracking">
              Backtracking
            </NavLink>
          </li>
          <li className={this.getNavLinkClass('/m/dynamic')}>
            <NavLink exact to="/m/dynamic">
              Programare dinamica
            </NavLink>
          </li>
          <li className={this.getNavLinkRelClass('/p')}>
            <NavLink to="/problems">Probleme</NavLink>
          </li>
        </ul>

        <div className="footer">
          <h2>Facut de Hutu Tudor</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
