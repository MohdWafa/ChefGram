import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

//Register User

export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //    // const body = JSON.stringify({ name, email, password });

    //     try {
    //       const res = await axios.post('/api/users', body, config);

    //       dispatch({
    //         type: REGISTER_SUCCESS,
    //         payload: res.data,
    //       });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
