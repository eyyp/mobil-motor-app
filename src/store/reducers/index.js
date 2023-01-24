import {combineReducers} from 'redux';
import { allProduct } from './allProduct';
import { oneProduct } from './OneProduct';
import { categoryProduct } from './categoryProduct';
import { allBanner } from './allBanner';
import { allNotification } from './allNotification';
import { allApport } from './allApport';
const reducers = combineReducers({
    products:allProduct,
    oneProduct:oneProduct,
    categoryProduct:categoryProduct,
    banner:allBanner,
    apport:allApport,
    notification:allNotification
})
export default reducers;