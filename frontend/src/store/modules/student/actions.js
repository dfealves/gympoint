export function studentCreateRequest(data) {
  return {
    type: '@student/STUDENT_REQUEST_CREATE',
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
