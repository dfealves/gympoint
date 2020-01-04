import styled from 'styled-components';

export const StudentTable = styled.table`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  border-radius: 4px;
  background-color: #fff;

  th {
    color: #444;
    text-align: left;
    padding: 18px 30px;

    th#ageHead {
      text-align: center;
    }
  }

  td {
    color: #666;
    font-size: 16px;
    line-height: 1.2px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    padding: 15px 28px;

    div {
    }
  }

  tbody {
    #name-title {
      width: 45%;
    }
    #email-title {
      width: 35%;
    }
    #age-title {
      width: 8%;
    }
    #age-student {
      width: 8%;
      padding-right: 30px;
      text-align: center;
    }
    #options {
      width: 12%;
    }
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
