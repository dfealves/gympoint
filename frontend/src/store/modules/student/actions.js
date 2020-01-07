export function studentCreateRequest(data) {
  return {
    type: '@student/STUDENT_CREATE_REQUEST',
    payload: { data },
  };
}

export function studentCreateSuccess(data) {
  return {
    type: '@student/STUDENT_CREATE_SUCCESS',
    payload: { data },
  };
}

export function studentCreateFailure(error) {
  return {
    type: '@student/STUDENT_CREATE_FAILURE',
    error,
  };
}

export function loadStudentRequest(page, name) {
  return {
    type: '@student/LOAD_REQUEST',
    payload: { page, name },
  };
}

export function loadStudentSuccess(page, students) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { page, students },
  };
}

export function studentUpdateRequest(data, id) {
  return {
    type: '@student/STUDENT_UPDATE_REQUEST',
    payload: { data },
    id,
  };
}

export function studentUpdateSuccess(data) {
  return {
    type: '@student/STUDENT_UPDATE_SUCCESS',
    payload: { data },
  };
}

export function studentUpdateFailure(error) {
  return {
    type: '@student/STUDENT_UPDATE_FAILURE',
    error,
  };
}

export function studentDeleteRequest(id) {
  return {
    type: '@student/STUDENT_DELETE_REQUEST',
    id,
  };
}

export function studentDeleteSuccess(data) {
  return {
    type: '@student/STUDENT_DELETE_SUCCESS',
    payload: { data },
  };
}

export function studentDeleteFailure(error) {
  return {
    type: '@student/STUDENT_DELETE_FAILURE',
    error,
  };
}
