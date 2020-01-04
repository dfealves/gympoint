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
`;
