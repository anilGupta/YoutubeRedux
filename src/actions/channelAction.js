import Config from '../constants/Config';
import { types } from '../constants/ActionType';

const
  getModel = () => { return gapi.client ? gapi.client.youtube: null},
  fetchChannelInfo  = () => {
     console.log(gapi.client);
     return dispatch =>{
        console.log(getModel());
        dispatch(receiveChannelInfo([]))
     }
  },
  receiveChannelInfo = (data) => {
    return {
      type: types.RECEIVE_CHANNEL_INFO,
      data: data
    }
  };

export  {
  fetchChannelInfo,
}




