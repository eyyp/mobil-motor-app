import { put, call} from 'redux-saga/effects';
import { allBanner } from '../reducers/allBanner';
import * as actions from '../actions/allBanner';

export default function* banners(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(allBanner);
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