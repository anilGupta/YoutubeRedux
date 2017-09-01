import { types } from '../constants/ActionType';

const initialState = {
    clientLoaded : false,
    authenticated: false
  },
  authReducer = (state = initialState, action) =>{
    switch (action.type){
      case types.CLIENT_INITIALIZE:
          console.log("client loaded");
          return Object.assign({}, state, { clientLoaded: action.loaded});

      default:
        return state;
    }
  };

export default authReducer;
