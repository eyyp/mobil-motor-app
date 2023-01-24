import * as types from './types'

export const getAllProduct = () => {
    return {
        type:types.GET_ALL_PRODUCT_REQUEST
    }
}

export function Failed() {
    return {
      type: types.GET_ALL_PRODUCT_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.GET_ALL_PRODUCT_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.GET_ALL_PRODUCT_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.GET_ALL_PRODUCT_DISABLED_LOADER,
    };
}