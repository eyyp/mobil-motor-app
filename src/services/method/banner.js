import api from '../index'
import Constants from '../Constants';

export const allBanner = () => {
  return api(
    Constants.ALL_BANNER,
    null,
    'get',
    null
  );
}
