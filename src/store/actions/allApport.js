import * as types from './types'

export const getAllApport = () => {
    return {
        type:types.GET_ALL_APPORTUNITY_REQUEST
    }
}

export function Failed() {
    return {
      type: types.GET_ALL_APPORTUNITY_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.GET_ALL_APPORTUNITY_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.GET_ALL_APPORTUNITY_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.GET_ALL_APPORTUNITY_DISABLED_LOADER,
    };
}