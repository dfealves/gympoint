import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  studentCreateSuccess,
  studentDeleteSuccess,
  studentUpdateSuccess,
  studentCreateFailure,
  studentDeleteFailure,
  studentUpdateFailure,
} from './actions';

export function* studentCreate({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;

    const response = yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    if (response) {
      yield put(studentCreateSuccess(response.data));

      history.push('/students');
      toast.success(
        `Aluno(a) ${payload.data.name} foi cadastrado(a) com sucesso!`
      );
    }
  } catch (err) {
    toast.error(
      `Falha no cadastro do aluno, verifique o seus dados! ${err.message}`
    );
    yield put(studentCreateFailure(err.message));
  }
}

export function* studentUpdate({ payload, id }) {
  try {
    console.tron.log(id, payload);
    const { name, email, age, weight, height } = payload.data;

    const response = yield call(api.put, `students/${id}`, {
      name,
      email,
      age,
      weight,
      height,
    });
    console.tron.log(response.data);
    if (response) {
      toast.success('Aluno atualizado com sucesso');
      yield put(studentUpdateSuccess(response.data));

      history.push('/dashboard/aluno');
    }
  } catch (err) {
    toast.error(
      `Falha na alteração do aluno, verifique o seus dados! ${err.message}`
    );
    yield put(studentUpdateFailure(err.message));
  }
}

export function* studentDelete({ id }) {
  try {
    const response = yield call(api.delete, `students/${id}`);

    toast.success('Aluno excluido com sucesso');

    yield put(studentDeleteSuccess(response.data));
    history.push('/students');
  } catch (err) {
    toast.error(
      `Falha na exclusão do aluno, verifique o seus dados! ${err.message}`
    );
    yield put(studentDeleteFailure(err.message));
  }
}

export default all([
  takeLatest('@student/STUDENT_CREATE_REQUEST', studentCreate),
  takeLatest('@student/STUDENT_UPDATE_REQUEST', studentUpdate),
  takeLatest('@student/STUDENT_DELETE_REQUEST', studentDelete),
]);
