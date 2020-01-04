import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSignOut = () => {
    confirmAlert({
      title: 'Confirmação ',
      message: 'Você realmente deseja sair ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => dispatch(signOut()),
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
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/Students">ALUNOS</Link>
          <Link to="/Plans">PLANOS</Link>
          <Link to="/Registration">MATRÍCULAS</Link>
          <Link to="/HelpOrders">PEDIDOS DE AUXILIO</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
