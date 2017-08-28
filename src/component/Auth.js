import React, { Component } from 'react'

class GoogleClient extends Component {

  static propTypes = {
    callback    : PropTypes.func.isRequired,
    appId       : PropTypes.string.isRequired,
    scope       : PropTypes.string,
  };

  static defaultProps = {
    scope       : 'public_profile,email',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.window   = window;
    this.loadSDK();
  }

  init(){
    const { appId, xfbml, cookie, version, autoLoad } = this.props;
    this.window.fbAsyncInit = () => {
      this.facebook = window.FB;
      this.facebook.init({ version: `v${version}`, appId, xfbml, cookie });
      if (autoLoad || this.window.location.search.includes('facebookdirect')) {
        this.facebook.getLoginStatus(this.checkLoginState);
      }
    };
    this.facebook = this.facebook || window.FB;
  }

  loadSDK(){   // Load the SDK asynchronously
    (function(d, s, id){
      var js, gs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js'
      gs.parentNode.insertBefore(js, gs);
    }(document, 'script', 'google-platform'));
  }

  handleAuth(e){
    e.preventDefault();
    const { appId, scope, callback} = this.props;
    gapi.load('auth2', function() {
      var auth2 = gapi.auth2.init({
        client_id: appId,
        fetch_basic_profile: false,
        scope: scope
      });
      auth2.signIn().then((googleUser) => {
        callback({
          accessToken: googleUser.getAuthResponse().access_token
        }, "GL");
      });
    });
  };

  render() {
    return <span><a onClick={::this.handleAuth} ><i className="icon-gplus" /></a></span>;
  }
}

export default GoogleClient;