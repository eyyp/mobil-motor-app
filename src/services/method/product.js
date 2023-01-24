import api from '../index'
import Constants from '../Constants';

export const allProduct = () => {
  return api(
    Constants.ALL_PRODUCT,
    null,
    'get',
    null
  );
}

export const oneProduct = (id) => {
    return api(
      Constants.ONE_PRODUCT + '/' + id,
      null,
      'get',
      null
    );
}

export const categoryProduct = (category) => {
    return api(
      Constants.CATEGORY_PRODUCT + '/' + category,
      null,
      'get',
      null
    );
}