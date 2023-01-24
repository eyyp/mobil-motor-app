import api from '../index'
import Constants from '../Constants';

export const allApport = () => {
  return api(
    Constants.ALL_APPORTUNITY,
    null,
    'get',
    null
  );
}