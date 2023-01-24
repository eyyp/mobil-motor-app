import * as types from './types'

export const getCategoryProduct = (category) => {
    return {
        type:types.GET_CATEGORY_PRODUCT_REQUEST,
        category
    }
}

export function Failed() {
    return {
      type: types.GET_CATEGORY_PRODUCT_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.GET_CATEGORY_PRODUCT_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.GET_CATEGORY_PRODUCT_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.GET_CATEGORY_PRODUCT_DISABLED_LOADER,
    };
}