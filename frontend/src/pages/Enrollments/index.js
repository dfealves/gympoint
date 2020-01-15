import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { MdCheckCircle, MdClose, MdAdd } from 'react-icons/md';

import api from '~/services/api';

import { Container, RegistrationTable } from './styles';

export default function ListEnrollments() {
  const [enrollments, setEnrollments] = useState([]);

  async function loadEnrollments() {
    const response = await api.get(`registrations`);

    const data = response.data.map(enrollment => ({
      ...enrollment,
      endDate: format(parseISO(enrollment.end_date), "d' de 'MMMM' de 'yyyy", {
        locale: pt,
      }),
      startDate: format(
        parseISO(enrollment.end_date),
        "d' de 'MMMM' de 'yyyy",
        {
          locale: pt,
        }
      ),
    }));
    setEnrollments(data);
  }
  useEffect(() => {
    document.title = 'Gympoint | Matrículas';

    loadEnrollments();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/registrations/${id}`);
      toast.success('Matrícula deletada com sucesso!');
    } catch (err) {
      toast.error('Não foi possível deletar está matricula!');
    }
  }
  function handleDeleteSubmit(id) {
    confirmAlert({
      title: 'Confirmação ',
      message:
        'Você realmente deseja apagar um aluno, está ação não poderá ser revertida ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            handleDelete(id);
          },
        },

        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando Matrículas</h1>
        <div>
          <Link to="/CreateEnrollment">
            <button type="submit">
              <MdAdd color="#fff" size={22} />
              Cadastrar
            </button>
          </Link>
        </div>
      </header>
      <RegistrationTable>
        <thead>
          <tr>
            <th id="student">ALUNO</th>
            <th id="plan">PLANO</th>
            <th id="start_date">INÍCIO</th>
            <th id="end_date">TÉRMINO</th>
            <th id="active">ATIVA</th>
            <th />
          </tr>
        </thead>

        {enrollments.map(e => (
          <tbody>
            <tr key={String(e.id)}>
              <td>{e.student.name}</td>
              <td>{e.plan.title}</td>
              <td id="start_date">
                {format(parseISO(e.start_date), "dd 'de' MMMM 'de' yyyy", {
                  locale: pt,
                })}
              </td>
              <td id="end_date">
                {format(parseISO(e.end_date), "dd 'de' MMMM 'de' yyyy", {
                  locale: pt,
                })}
              </td>
              <td id="active">
                {e.active === false ? (
                  <MdClose size={18} color="#ff0000" />
                ) : (
                  <MdCheckCircle size={18} color="#0dff00" />
                )}
              </td>
              <td id="action">
                <div>
                  <Link to={`/registration/updated/${e.id}`}>
                    <button id="buttonEditar" type="submit">
                      Editar
                    </button>
                  </Link>
                  <button
                    id="buttonApagar"
                    type="submit"
                    onClick={() => handleDeleteSubmit(e.id)}
                  >
                    Apagar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </RegistrationTable>
    </Container>
  );
}
