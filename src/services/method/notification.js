import api from '../index'
import Constants from '../Constants';

export const allNotification = () => {
  return api(
    Constants.ALL_NOTIFICATION,
    null,
    'get',
    null
  );
}