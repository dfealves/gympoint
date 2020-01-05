import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    h1 {
      font-size: 24px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-left: 10px;
        height: 44px;
        width: 142px;
        background: #ee4d64;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        border: none;
        transition: background 0.2s;

        &:hover {
          background: ${darken('0.1', '#ee4d64')};
        }
      }

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 44px;
        padding-left: 40px;
        padding-right: 15px;
        margin-left: 10px;
        width: 237px;
      }

      button#voltar {
        height: 44px;
        width: 100px;
        background: #cccc;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        border: none;
        transition: background 1s;
        &:hover {
          background: ${darken('0.5', '#cccc')};
        }
      }
    }
  }

  header#headerForm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    width: 900px;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StudentForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 30px;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: -30px;
  }

  div#div1 {
    display: flex;
    ul {
      display: flex;
      list-style: none;
      flex-direction: column;
    }

    li {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      input {
        width: 840px;
        height: 45px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        background: #fff;
        padding: 0 15px;
      }

      strong {
        white-space: nowrap;
        margin-bottom: 8px;
      }
    }
  }

  div#div2 {
    display: flex;
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;
  }
  li {
    display: flex;
    flex-direction: column;

    input {
      width: 270px;
      height: 45px;
      border-radius: 4px;
      border: solid 1px #ddd;
      background: #fff;
      padding: 0 15px;
      margin-right: 16px;
    }
    strong {
      white-space: nowrap;
      margin-bottom: 8px;
    }
  }
`;
