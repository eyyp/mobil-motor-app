import { put, call} from 'redux-saga/effects';
import { allProduct } from '../../services/method/product';
import * as actions from '../actions/allProduct';

export default function* products(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(allProduct);
    if (response) {
      console.log(response)
      yield put(actions.Response(response.data));
      yield put(actions.disableLoader({}));
    } 
    else {
      yield put(actions.Failed());
      yield put(actions.disableLoader({}));
    }
  } 
  catch (error) {
    yield put(actions.Failed());
    yield put(actions.disableLoader({}));
  } 
  finally {
    yield put(actions.disableLoader({}));
  }
}