import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

class GoogleClient extends Component {

  constructor(props) {
    super(props);
    this.googleAuth = null;
    this.client = null;
  }

  componentDidMount() {
  }

  handleAuth(e){
    e.preventDefault();
  };

  render() {
    return <span><NavLink to="#" onClick={::this.handleAuth} ><i className="icon-gplus" /> Sign In</NavLink></span>;
  }
}

export default GoogleClient;