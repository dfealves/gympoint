import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from '~/styles/form';
import { StudentTable } from './styles';

import api from '~/services/api';

export default function Students() {
  const dispatch = useDispatch();

  return (
    <Container>
      <header>
        <h1>Gerenciamento de Alunos</h1>

        <div>
          <button type="button">CADASTRAR</button>
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </header>
      <StudentTable>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th id="ageHead">IDADE</th>

            <th />
          </tr>
        </thead>

        {/* {students.map(student => ( */}
        <tbody>
          <tr>
            <td>Danilo Ferreira</td>
            <td id="email">daniloferreira.alves@outlook.com</td>
            <td id="age">25 Anos</td>
            <td id="action">
              <button id="buttonEditar" type="button" onClick={() => {}}>
                Editar
              </button>
              <button id="buttonApagar" type="button" onClick={() => {}}>
                Apagar
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Danilo Ferreira</td>
            <td id="email">daniloferreira.alves@outlook.com</td>
            <td id="age">25 Anos</td>
            <td id="action">
              <button id="buttonEditar" type="button" onClick={() => {}}>
                Editar
              </button>
              <button id="buttonApagar" type="button" onClick={() => {}}>
                Apagar
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Danilo Ferreira</td>
            <td id="email">daniloferreira.alves@outlook.com</td>
            <td id="age">25 Anos</td>
            <td id="action">
              <button id="buttonEditar" type="button" onClick={() => {}}>
                Editar
              </button>
              <button id="buttonApagar" type="button" onClick={() => {}}>
                Apagar
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Danilo Ferreira</td>
            <td id="email">daniloferreira.alves@outlook.com</td>
            <td id="age">25 Anos</td>
            <td id="action">
              <button id="buttonEditar" type="button" onClick={() => {}}>
                Editar
              </button>
              <button id="buttonApagar" type="button" onClick={() => {}}>
                Apagar
              </button>
            </td>
          </tr>
        </tbody>
        {/* ))} */}
      </StudentTable>
    </Container>
  );
}
