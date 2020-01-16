import { takeLatest, call, put, all } from 'redux-saga/effects';

import { registrationEditRequest, registrationEditSuccess } from './actions';

// import history from '~/services/history';
import api from '~/services/api';

export function* registrationList() {
  const data = yield call(api.get, '/registrations');
  console.tron.log('data');

  yield put(registrationEditSuccess(data));
}

export default all([takeLatest('@plan/LIST_REQUEST', registrationList)]);
