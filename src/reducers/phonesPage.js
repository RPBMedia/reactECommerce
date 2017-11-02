import R from 'ramda';

import {
  FETCH_PHONES_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  ids: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      });
    default:
      return state;
  }
};
