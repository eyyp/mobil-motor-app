import { put, call} from 'redux-saga/effects';
import { oneProduct } from '../../services/method/product';
import * as actions from '../actions/oneProduct';

export default function* productOne(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(oneProduct,action.id);
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