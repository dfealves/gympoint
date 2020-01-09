import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { confirmAlert } from 'react-confirm-alert';

import { MdCheck, MdClose, MdAdd } from 'react-icons/md';

import api from '~/services/api';

import { Container, RegistrationTable } from './styles';

export default function Registration({ history }) {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registrations');

      setRegistrations(response.data);
    }
    loadRegistration();
  }, [registrations]);

  function handleDeleteSubmit(id) {
    confirmAlert({
      title: 'Confirmação ',
      message:
        'Você realmente deseja apagar o plano, está ação não poderá ser revertida ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => api.delete(`registrations/${id}`),
        },

        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  }

  function handleEditRegistration(registration) {
    history.push({
      pathname: '/registrationStore',
      state: { store: false, registration },
    });
  }

  function handleCreateRegistrationFrag() {
    history.push({
      pathname: '/registrationStore',
      state: { store: true },
    });
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando Matrículas</h1>
        <div>
          <button type="button" onClick={handleCreateRegistrationFrag}>
            <MdAdd color="#fff" size={22} />
            CADASTRAR
          </button>
        </div>
      </header>
      <RegistrationTable>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>plano</th>
            <th id="start_date">INÍCIO</th>
            <th id="end_date">TÉRMINO</th>
            <th id="active">ATIVA</th>
            <th id="options" />
            <th />
          </tr>
        </thead>
        <tbody>
          {registrations.map(registration => (
            <tr key={String(registration?.id)}>
              <td>{registration?.student?.name}</td>
              <td>{registration?.plan?.title}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </RegistrationTable>
    </Container>
  );
}
