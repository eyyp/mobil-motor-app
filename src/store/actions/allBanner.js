import * as types from './types'

export const getAllBanner = () => {
    return {
        type:types.GET_ALL_BANNER_REQUEST
    }
}

export function Failed() {
    return {
      type: types.GET_ALL_BANNER_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.GET_ALL_BANNER_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.GET_ALL_BANNER_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.GET_ALL_BANNER_DISABLED_LOADER,
    };
}