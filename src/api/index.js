import R from 'ramda';
import request from 'superagent';

import phones from './mockPhones';
import categories from './mockCategories';

export const fetchPhones = async () => {

  //Return mocked Data locally
  // return new Promise((resolve) => {
  //   resolve(phones);
  // });

  //Dynamic request to a mock API on the web
  const { body } = await request.get('http://www.mocky.io/v2/5a008ee03000003a0bfabd07');
  return body.phones;
};

export const loadMorePhones = async ({ offset }) => {
  console.log(offset);
  return new Promise((resolve) => {
    resolve(phones);
  });
};

export const fetchPhoneById = async id => {
  return new Promise((resolve) => {
    const phone = R.find(R.propEq('id', id), phones);
    resolve(phone);
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    resolve(categories);
  });
};
