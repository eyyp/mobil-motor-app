import * as types from './types'

export const getOneProduct = (id) => {
    return {
        type:types.GET_ONE_PRODUCT_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.GET_ONE_PRODUCT_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.GET_ONE_PRODUCT_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.GET_ONE_PRODUCT_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.GET_ONE_PRODUCT_DISABLED_LOADER,
    };
}