import { call, takeLatest } from "redux-saga/effects";
import * as types from '../actions/types'
import products from "./allProduct";
import productOne from './oneProduct';
import productCategory from "./categoryProduct";
import notifications from "./allNotification";
import banners from "./allBanner"; 
import apports from "./allApport";
export default function* sagas() {
    yield takeLatest(types.GET_ALL_PRODUCT_REQUEST,products);
    yield takeLatest(types.GET_ONE_PRODUCT_REQUEST,productOne);
    yield takeLatest(types.GET_CATEGORY_PRODUCT_REQUEST,productCategory);
    yield takeLatest(types.GET_ALL_NOTIFICATION_REQUEST,notifications);
    yield takeLatest(types.GET_ALL_BANNER_REQUEST,banners);
    yield takeLatest(types.GET_ALL_APPORTUNITY_REQUEST,apports);
}