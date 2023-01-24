import * as types from './types'

export const getAllNotification = () => {
    return {
        type:types.GET_ALL_NOTIFICATION_REQUEST
    }
}

export function Failed() {
    return {
      type: types.GET_ALL_NOTIFICATION_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.GET_ALL_NOTIFICATION_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.GET_ALL_NOTIFICATION_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.GET_ALL_NOTIFICATION_DISABLED_LOADER,
    };
}