import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import {
  MdAdd,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { Container, PlanTable } from './styles';

import { planDeleteRequest } from '~/store/modules/plan/actions';

export default function Plans({ history }) {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function listPlans() {
      const response = await api.get('plans');

      setPlans(response.data);
    }
    listPlans();
  }, [plans]);

  function handleDeleteSubmit(id) {
    confirmAlert({
      title: 'Confirmação ',
      message:
        'Você realmente deseja apagar o plano, está ação não poderá ser revertida ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => dispatch(planDeleteRequest(id)),
        },

        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  }

  function handleEditPlan(plan) {
    history.push({
      pathname: '/planStore',
      state: { store: false, plan },
    });
  }

  function handleCreatePlanFrag() {
    history.push({
      pathname: '/planStore',
      state: { store: true },
    });
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando Planos</h1>
        <div>
          <button type="button" onClick={handleCreatePlanFrag}>
            <MdAdd color="#fff" size={22} />
            CADASTRAR
          </button>
        </div>
      </header>
      <PlanTable>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th id="valor">VALOR p/mês</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={String(plan.id)}>
              <td id="title">{plan.title}</td>
              <td id="duration">
                {plan.duration}
                <span> {plan.duration > 1 ? 'meses' : 'mês'}</span>
              </td>
              <td id="price">R${plan.price},00</td>
              <td>
                <div>
                  <button type="button" onClick={() => handleEditPlan(plan)}>
                    editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSubmit(plan.id)}
                  >
                    apagar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </PlanTable>
    </Container>
  );
}
