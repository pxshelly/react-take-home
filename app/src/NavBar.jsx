import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faBars} />
        <img src='https://www.plugco.in/static/icons/favicon-96x96.png' alt=''/>
      </div>
    )
  }
}

export default NavBar;