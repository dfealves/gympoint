import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdAdd, MdSearch } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

import { Container } from '~/styles/form';
import { StudentTable } from './styles';

import { studentDeleteRequest } from '~/store/modules/student/actions';

import api from '~/services/api';

export default function Students({ history }) {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [searchStudent, setSearchStudent] = useState('');

  useEffect(() => {
    async function searchStudentByName() {
      const response = await api.get(
        searchStudent ? `students?q=${searchStudent}` : 'students'
      );

      setStudents(response.data);
    }
    searchStudentByName();
  }, [searchStudent, students]);

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
        {students.map(student => (
          <tbody>
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
          </tbody>
        ))}
      </StudentTable>
    </Container>
  );
}
