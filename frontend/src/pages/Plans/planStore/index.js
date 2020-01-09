import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import { Form, Input } from '@rocketseat/unform';

import { Container, ContentForm, PlanForm } from './styles';

import {
  planCreateRequest,
  planUpdateRequest,
} from '~/store/modules/plan/actions';

export default function PlanStore({ history, location }) {
  const dispatch = useDispatch();
  const [priceFinal, setPriceFinal] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const plan = location.state ? location.state.plan : {};
  const store = location.state ? location.state.store : false;

  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    setInitialData(plan);
  }, [plan]);

  useMemo(() => {
    setPriceFinal(plan ? plan.duration * plan.price : duration * price);
  }, [plan, duration, price]);

  function handleSubmit(data) {
    if (store) {
      dispatch(planCreateRequest(data));
    } else {
      dispatch(planUpdateRequest(data, initialData.id));
    }
  }

  function handleEditPlanReverse() {
    history.push('plans');
  }

  return (
    <Container>
      <ContentForm>
        <header id="headerForm">
          <h1>{store ? 'Cadastro de Planos' : 'Atualização de Planos'}</h1>
          <div>
            <button id="voltar" type="button" onClick={handleEditPlanReverse}>
              voltar
            </button>
            <button type="submit" form="formPlan" id="buttonHandleSubmit">
              salvar
            </button>
          </div>
        </header>
        <PlanForm>
          <Form initialData={initialData} onSubmit={handleSubmit} id="formPlan">
            <div id="div1">
              <ul>
                <li>
                  <strong>TÍTULO DO PLANO</strong>
                  <Input name="title" type="text" placeholder="Nome do plano" />
                </li>
              </ul>
            </div>
            <div id="div2">
              <ul>
                <li>
                  <strong>DURAÇÃO(em meses)</strong>
                  <Input
                    name="duration"
                    type="number"
                    placeholder="0"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    min="0"
                    step="any"
                    onChange={text => setDuration(text.target.value)}
                  />
                </li>
                <li>
                  <strong>PREÇO MENSAL</strong>
                  <Input
                    name="price"
                    type="number"
                    placeholder="0,00"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    min="0"
                    step="any"
                    onChange={text => setPrice(text.target.value)}
                  />
                </li>
                <li>
                  <strong>PREÇO TOTAL</strong>
                  <NumberFormat
                    name="pricetotal"
                    displayType="input"
                    thousandSeparator
                    prefix="R$"
                    placeholder={priceFinal}
                    disabled
                    value={priceFinal}
                  />
                </li>
              </ul>
            </div>
          </Form>
        </PlanForm>
      </ContentForm>
    </Container>
  );
}

PlanStore.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};

PlanStore.defaultProps = {
  location: {
    state: {},
  },
};
