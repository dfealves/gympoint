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
      color: #444444;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-left: 10px;
        height: 36px;
        background: #ee4d64;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        padding: 0 16px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        transition: background 0.2s;
        &:hover {
          background: ${darken(0.1, '#ee4d64')};
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
        background: #4f545c;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        border: none;
        transition: background 1s;
        &:hover {
          background: #fff;
          border: 3px solid #4f545c;
          color: #4f545c;
        }
      }
    }
  }
  header#HeaderForm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    width: 900px;
  }
`;

export const RegistrationTable = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 30px;
  padding: 30px;
  thead {
    font-family: Roboto;
    color: #444;
    text-align: left;
    th#student{
      width: 25%;
    }
    th#start_date {
      text-align: center;
      width: 25%;
    }
    th#end_date {
      text-align: center;
      width: 25%;
    }
    th#active {
      text-align: end;
    }
  }
  tbody {
    td {
      color: #666;
      font-size: 16px;
      line-height: 1.2px;
      padding-top: 28px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;

    }

    td#start_date {
      text-align: center;
    }
    td#end_date {
      text-align: center;
    }
    td#active {
      text-align: center;
    }
    td#action {
      text-align: end;
      width: 20%;


      div {
      display: flex;
      justify-content: flex-end;

      button {
        border: 0;
        background: none;
        font-size: 16px;
        color: #4d85ee;
      }
      & button + button {
        border: 0;
        background: none;
        margin-left: 23px;
        font-size: 16px;
        color: #de3b3b;
      }
    }
  }
`;
