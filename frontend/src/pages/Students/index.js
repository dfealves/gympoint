import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  MdAdd,
  MdSearch,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

import { Container } from '~/styles/form';
import { StudentTable } from './styles';

import { studentDeleteRequest } from '~/store/modules/student/actions';

import api from '~/services/api';
import history from '~/services/history';

export default function Students({ history }) {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [searchStudent, setSearchStudent] = useState('');
  const [page, setPage] = useState(1);

  // searchStudent ? `students?q=${searchStudent}&p=${page}` : 'students'
  // searchStudent ? `students?q=${searchStudent}` : 'students',
  // `students?p=${page}`

  useEffect(() => {
    async function searchStudentByName() {
      const response = await api.get('/students', {
        params: {
          q: searchStudent,
          p: page,
        },
      });

      setStudents(response.data);
    }
    searchStudentByName();
  }, [page, searchStudent, students]);

  const pageChange = useCallback(
    action => {
      setPage(action === 'back' ? page - 1 : page + 1);
      console.tron.log(page);
    },
    [page]
  );

  function handleDeleteSubmit(id) {
    confirmAlert({
      title: 'Confirmação ',
      message:
        'Você realmente deseja apagar um aluno, está ação não poderá ser revertida ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => dispatch(studentDeleteRequest(id)),
        },

        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  }

  function handleEditStudent(student) {
    history.push({
      pathname: '/studentStore',
      state: { store: false, student },
    });
  }

  function handleCreateStudentFlag() {
    history.push({
      pathname: '/studentStore',
      state: { store: true },
    });
  }

  return (
    <Container>
      <header>
        <h1>Gerenciamento de Alunos</h1>

        <div>
          <button type="button" onClick={handleCreateStudentFlag}>
            <MdAdd color="#fff" size={22} />
            CADASTRAR
          </button>
          <div>
            <MdSearch
              color="#999"
              size={22}
              style={{ position: 'relative', right: '-45' }}
            />
            <input
              type="text"
              name="q"
              placeholder="Buscar aluno"
              onChange={text => setSearchStudent(text.target.value)}
            />
          </div>
        </div>
      </header>
      <StudentTable>
        <thead>
          <tr>
            <th id="name-title">NOME</th>
            <th id="email-title">E-MAIL</th>
            <th id="age-title">IDADE</th>
            <th id="options" />
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr id="student-row" key={String(student.id)}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td id="age-student">{student.age}</td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => handleEditStudent(student)}
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSubmit(student.id)}
                  >
                    apagar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
      <ul>
        <li>
          <button type="button" id="btnBack" onClick={() => pageChange('back')}>
            <MdKeyboardArrowLeft color="#fff" size={22} />
          </button>
          <button
            type="button"
            id="btnNext"
            onClick={() => pageChange('next')}
            disabled={students.length > 20}
          >
            <MdKeyboardArrowRight color="fff" size={22} />
          </button>
        </li>
      </ul>
    </Container>
  );
}
