import createReducer from '../../lib/createReducer'
import * as types from '../actions/types';

const initialState = {
  status: 'basic',
  product: [],
};

export const allProduct = createReducer(initialState, {
  [types.GET_ALL_PRODUCT_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.GET_ALL_PRODUCT_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      type : response
    };
  },

  [types.GET_ALL_PRODUCT_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.GET_ALL_PRODUCT_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.GET_ALL_PRODUCT_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});