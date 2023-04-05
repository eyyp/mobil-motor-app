import createReducer from '../../lib/createReducer'
import * as types from '../actions/types';

const initialState = {
  status: 'basic',
  apport: [],
};

export const allApport = createReducer(initialState, {
  [types.GET_ALL_APPORTUNITY_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.GET_ALL_APPORTUNITY_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      apport : action.response
    };
  },

  [types.GET_ALL_APPORTUNITY_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.GET_ALL_APPORTUNITY_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.GET_ALL_APPORTUNITY_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});