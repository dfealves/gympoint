import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

// import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
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
