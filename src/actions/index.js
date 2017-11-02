import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE
} from './types';
import {
  fetchPhones as fetchPhonesApi
} from '../api';


export const fetchPhones = () => async dispatch => {

  try {
    dispatch({ type: FETCH_PHONES_START });
    const phones = await fetchPhonesApi();

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    });

  } catch (error) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: error,
      error: true
    });
  }
};
