import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  planCreateSuccess,
  planCreateFailure,
  planUpdateSuccess,
  planUpdtadeFailure,
  planDeleteSuccess,
  planDeleteFailure,
  planListSuccess,
  planListFailure,
} from './actions';

export function* planCreate({ payload }) {
  try {
    const { title, duration, price } = payload.data;

    const plan = { title, duration, price };

    const response = yield call(api.post, 'plans', plan);

    yield put(planCreateSuccess(response.data));
    history.push('/plans');

    toast.success('Novo plano cadastrado com sucesso!');
  } catch (err) {
    yield put(planCreateFailure(err.message));
    toast.error(`Falha ao cadastrar plano, verifique os dados! ${err.message}`);
  }
}

export function* planUpdate({ payload, id }) {
  try {
    const { title, duration, price } = payload.data;

    const plan = { title, duration, price };

    const response = yield call(api.put, `plans/${id}`, plan);

    yield put(planUpdateSuccess(response.data));
    history.push('/plans');

    toast.success('Plano atualizado com sucesso!');
  } catch (err) {
    yield put(planUpdtadeFailure(err.message));
    toast.error(`Falha ao atualizar plano, verifique os dados! ${err.message}`);
  }
}

export function* planDelete({ id }) {
  try {
    const response = yield call(api.delete, `plans/${id}`);

    yield put(planDeleteSuccess(response.data));
    history.push('/plans');

    toast.success('O plano foi deletado com sucesso!');
  } catch (err) {
    yield put(planDeleteFailure(err.message));
    toast.error(`Falha ao deletar o plano! ${err.message}`);
  }
}

export function* planLists() {
  try {
    const response = yield call(api.get, 'plans');

    yield put(planListSuccess(response.data));
  } catch (err) {
    yield put(planListFailure(err.message));
  }
}

export default all([
  takeLatest('@plan/PLAN_CREATE_REQUEST', planCreate),
  takeLatest('@plan/PLAN_UPDATE_REQUEST', planUpdate),
  takeLatest('@plan/PLAN_DELETE_REQUEST', planDelete),
  takeLatest('@plan/PLAN_LIST_REQUEST', planLists),
]);
