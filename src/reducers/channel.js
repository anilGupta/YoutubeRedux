import { types } from '../constants/ActionType';

const initialState = {
    list : false,
    authenticated: false
  },
  channelReducer = (state = initialState, action) =>{
    switch (action.type){
      case types.RECEIVE_CHANNEL_INFO:
          console.log("channel loaded");
          return Object.assign({}, state, { list: action.data});

      default:
        return state;
    }
  };

export default channelReducer;
