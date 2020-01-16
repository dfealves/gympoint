import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';
import colors from './colors';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root {
    height: 100%
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

.clear-user-agent-styles thead,
.clear-user-agent-styles tbody,
.clear-user-agent-styles tfoot,
.clear-user-agent-styles tr,
.clear-user-agent-styles th,
.clear-user-agent-styles td {
    display: block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    border-collapse: inherit;
    border-spacing: 0;
    border-color: inherit;
    vertical-align: inherit;
    text-align: left;
    font-weight: inherit;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
}


  /* confirm alert */

  div.react-confirm-alert-overlay {
  background: rgba(0,0,0,0.5);
}
div.react-confirm-alert-body {
  width: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  line-height: 1.25;
  h1 {
    color: #444;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
}
div.react-confirm-alert-button-group{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  button {
    height: 36px;
    width: 80px;
    border-radius: 4px;
    background-color: #ee4d64;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border: none;
    padding: 0 16px;
    transition: background 0.2s;
    justify-content: center;
    align-items: center;
    &:hover {
      background: ${darken(0.07, `#ee4d64`)};
    }
  }
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  background: #fff;
  border-radius: 4px;
`;

export const Table = styled.table`
  flex: 1;
  display: table;
  border-collapse: separate;
  thead th {
    text-align: left;
    color: #444;
    font-weight: bold;
    font-size: 16px;
    padding: 20px 10px;
    border-bottom: 1px solid #eee;
    &:nth-child(n + 2) {
      text-align: center;
    }
  }
  tbody td {
    padding: 20px 10px;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #eee;
    &:nth-child(n + 2) {
      text-align: center;
    }
    &:nth-child(4) {
    }
    button {
      margin: 0 10px;
      border: 0;
      background-color: #fff;
    }
    .edit {
      color: ${colors.btnPrimary};
    }
    .delete {
      color: ${colors.btnSecondary};
    }
  }
`;

export const Unform = styled(Form)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 30px 30px 10px 14px;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-bottom: 20px;
  }
  strong {
    font-size: 14px;
    color: #444444;
    margin-bottom: 5px;
  }
  span {
    color: red;
  }
  input {
    background: #ffffff;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #dddddd;
    font-size: 16px;
    color: #666666;
    padding-left: 15px;
    &:focus {
      border-color: #7159c1 !important;
    }
    &:disabled {
      background-color: #dcdcdc;
    }
  }
  .fullSize {
    grid-column: 1/4;
  }
`;
