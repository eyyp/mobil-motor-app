import createReducer from '../../lib/createReducer'
import * as types from '../actions/types';

const initialState = {
  status: 'basic',
  categoryP: [],
};

export const categoryProduct = createReducer(initialState, {
  [types.GET_CATEGORY_PRODUCT_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.GET_CATEGORY_PRODUCT_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      type : response
    };
  },

  [types.GET_CATEGORY_PRODUCT_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.GET_CATEGORY_PRODUCT_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    }; 
  }, 

  [types.GET_CATEGORY_PRODUCT_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});