import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

// import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <text>SEU E-MAIL</text>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <text>SUA SENHA</text>
        <Input name="password" type="password" placeholder="***********" />

        <button type="submit">Entrar no sistema</button>
        {/* <Link></Link> */}
      </Form>
    </>
  );
}
