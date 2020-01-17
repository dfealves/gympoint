import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdCheckCircle } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import { formatDate } from '~/utils/format';

import { Container, Content, Table } from '~/styles/global';
import MenuBar from '~/components/MenuBar';

import api from '~/services/api';
import history from '~/services/history';

import { registrationEditRequest } from '~/store/modules/registration/actions';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const response = await api.get('registrations');
      console.tron.log(response.data);

      const data = response.data.map(registration => ({
        ...registration,
        startDateFormatted: formatDate(registration.start_date),
        endDateFormatted: formatDate(registration.end_date),
      }));
      setRegistrations(data);
    }
    loadData();
  }, []);

  async function handleEdit(registrationId) {
    console.tron.log(`Edit: ${registrationId}`);

    const registration = registrations.find(r => r.id === registrationId);
    console.tron.log(registration);

    dispatch(registrationEditRequest(registration));

    history.push(`/registrations/details/${registrationId}`);
  }

  async function handleDelete(registrationId) {
    console.tron.log(`Delete: ${registrationId}`);

    // eslint-disable-next-line no-alert

    await api.delete(`registrations/${registrationId}`);
    setRegistrations(
      registrations.filter(registration => registration.id !== registrationId)
    );
  }

  function handleDeleteSubmit(registrationId) {
    confirmAlert({
      title: 'Confirmação ',
      message: 'Você realmente deseja desativar a matrícula ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(registrationId),
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
      <MenuBar title="Gerenciando matrículas" route="registrations" />
      <Content>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th>Botões</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.startDateFormatted}</td>
                <td>{registration.endDateFormatted}</td>
                <td>
                  <MdCheckCircle
                    size={20}
                    color={
                      registration.canceled_at === null ? '#ddd' : '#72cb59'
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(registration.id)}
                    className="edit"
                    type="button"
                  >
                    editar
                  </button>
                  <button
                    onClick={() => handleDeleteSubmit(registration.id)}
                    className="delete"
                    type="button"
                  >
                    deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
