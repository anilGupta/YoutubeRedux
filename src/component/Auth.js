import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import Config from '../constants/Config';

class GoogleClient extends Component {

  constructor(props) {
    super(props);
    this.googleAuth = null;
    this.client = null;
  }

  componentDidMount() {
  }

  handleAuth(e){
    const { auth } = Config;
    e.preventDefault();
    gapi.load('client:auth2', () =>{
      window.googleClient= gapi.client;
      this.client = gapi.client;
      this.client.init({
        'apiKey': auth.apiKey,
        'clientId': auth.clientId,
        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
      }).then(()=>{
        this.googleAuth = gapi.auth2.getAuthInstance();
        this.googleAuth.isSignedIn.listen(this.authenticated);
        this.googleAuth.signIn()
      });
    });
  };

  authenticated(response){
     console.log(response);
  }

  render() {
    return <span><NavLink to="#" onClick={::this.handleAuth} ><i className="icon-gplus" /> Sign In</NavLink></span>;
  }
}

export default GoogleClient;