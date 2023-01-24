import { put, call} from 'redux-saga/effects';
import { categoryProduct } from '../../services/method/product';
import * as actions from '../actions';

export default function* productCategory(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(categoryProduct,action.category);
    if (response) {
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