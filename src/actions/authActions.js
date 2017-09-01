import Config from '../constants/Config';
import { types } from '../constants/ActionType';

const
  initializeClient  = () => {
    const { auth } = Config;
    return (dispatch) => {
      gapi.load('client:auth2', () =>{
        gapi.client.init({
          'apiKey': auth.apiKey,
          'clientId': auth.clientId,
          'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
        }).then(() =>{
             dispatch(receiveClient(true))
        });
      });
    }

  },
  initializeUser = () => {
    return dispatch => {
    }
  },
  authenticateUser = () => {
  },
  receiveClient = (status=false)=>{
    return {
         type: types.CLIENT_INITIALIZE,
         loaded: status
    }
  };

export  {
   initializeClient,
   authenticateUser,
   initializeUser
}