import R from 'ramda';

import { ADD_PHONE_TO_BASKET } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return R.append(payload, state);
    default:
      return state;
  }
};
