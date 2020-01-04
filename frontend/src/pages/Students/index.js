import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdAdd, MdSearch } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

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

  const handleDeleteSubmit = id => {
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
  };

  return (
    <Container>
      <header>
        <h1>Gerenciamento de Alunos</h1>

        <div>
          <button type="button">
            <MdAdd color="#fff" size={22} />
            CADASTRAR
          </button>
          <div>
            <MdSearch
              color="#999"
              size={22}
              style={{ position: 'absolute', marginLeft: '-90' }}
            />
            <input type="text" placeholder="Buscar aluno" />
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
                  <button type="button" onClick={() => {}}>
                    editar
                  </button>
                  <button type="button" onClick={handleDeleteSubmit}>
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
