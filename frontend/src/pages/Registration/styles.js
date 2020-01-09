import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { confirmAlert } from 'react-confirm-alert';

import { MdCheck, MdClose } from 'react-icons/md';

import api from '~/services/api';

import { Container, RegistrationTable } from './styles';

export default function Registration({ history }) {
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registrations');

      setRegistration(response.data);
    }
    loadRegistration();
  }, [registration]);

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

  function handleEditRegistration(plan) {
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

  return <div />;
}
