import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  span {
    color: #ee4d64;
    margin-bottom: 10px;
  }
  form {
    label {
      color: #444;
      font-weight: bold;
    }
    input {
      width: 100%;
      color: #666;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #bbb;
    }
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
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 20px;
  padding: 30px;
  border-radius: 4px;
  > input {
    height: 35px;
    border-color: #ddd;
  }
  div.numbers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
    min-width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: #444;
  }
  & > div {
    display: flex;
  }
`;
