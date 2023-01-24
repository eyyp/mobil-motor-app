import createReducer from '../../lib/createReducer'
import * as types from '../actions/types';

const initialState = {
  status: 'basic',
  notification: [],
};

export const allNotification = createReducer(initialState, {
  [types.GET_ALL_NOTIFICATION_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.GET_ALL_NOTIFICATION_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      type : response
    };
  },

  [types.GET_ALL_NOTIFICATION_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.GET_ALL_NOTIFICATION_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.GET_ALL_NOTIFICATION_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});