import Constants from "./Constants";
import axios from "axios";
const api = (path, params, methodP, token) => {
    console.log("path")

    const headersOptions = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token && { "Authorization": `Bearer ${token}`})
    }

    const options = {
        headers:headersOptions,
        method: methodP,
        ...(params && { body: params }),
    }

    console.log(Constants.BASE_URL + path, options)
    return axios(Constants.BASE_URL + path, options).
    then(res => res).
    catch(error => error) 
}   
export default api;