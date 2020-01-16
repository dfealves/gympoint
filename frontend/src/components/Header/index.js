import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { confirmAlert } from 'react-confirm-alert';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, ItemMenu } from './styles';

import logo from '~/assets/logo-header.svg';

const ActiveStyle = {
  color: '#444444',
};

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
          <ItemMenu activeStyle={ActiveStyle} to="/Students">
            ALUNOS
          </ItemMenu>
          <ItemMenu activeStyle={ActiveStyle} to="/Plans">
            PLANOS
          </ItemMenu>
          <ItemMenu activeStyle={ActiveStyle} to="/Registrations">
            MATRÍCULAS
          </ItemMenu>
          <ItemMenu activeStyle={ActiveStyle} to="/HelpOrders">
            PEDIDOS DE AUXILIO
          </ItemMenu>
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
