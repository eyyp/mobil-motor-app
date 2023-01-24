import createReducer from '../../lib/createReducer'
import * as types from '../actions/types';

const initialState = {
  status: 'basic',
  banner: [],
};

export const allBanner = createReducer(initialState, {
  [types.GET_ALL_BANNER_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.GET_ALL_BANNER_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      type : response
    };
  },

  [types.GET_ALL_BANNER_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.GET_ALL_BANNER_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.GET_ALL_BANNER_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});