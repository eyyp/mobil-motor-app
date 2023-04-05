import createReducer from '../../lib/createReducer'
import * as types from '../actions/types';

const initialState = {
  status: 'basic',
  oneP: [],
};

export const oneProduct = createReducer(initialState, {
  [types.GET_ONE_PRODUCT_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.GET_ONE_PRODUCT_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      oneP : action.response
    };
  },

  [types.GET_ONE_PRODUCT_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.GET_ONE_PRODUCT_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.GET_ONE_PRODUCT_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});