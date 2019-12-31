import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 448px;
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 50px 20px;
  border-radius: 4px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    text {
      text-align: left;
      font-weight: bold;
      margin: 3px 0;
    }
    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    input {
      border: 0;
      border-radius: 4px;
      border: 1px solid #ddd;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ee4d64')};
      }
    }
  }
`;
