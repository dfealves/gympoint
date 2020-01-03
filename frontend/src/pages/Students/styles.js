import styled from 'styled-components';

export const StudentTable = styled.table`
  width: 100%;
  height: 100px;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 30px;
  padding: 30px;

  thead {
    font-family: Roboto;
    color: #444;
    text-align: left;

    th#ageHead {
      text-align: center;
    }
  }

  tbody {
    margin-top: 30px;
    tr {
      border-top: 1px solid #979797;
    }
    td {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 16px;
      color: #666666;
    }
    td#email {
      width: 300px;
    }
    td#age {
      text-align: center;
    }
    td#action {
      text-align: end;

      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      button#buttonEditar {
        background: none;
        border: 0;
        color: #4d85ee;
      }
      button#buttonApagar {
        background: none;
        border: 0;
        color: #de3b3b;
      }
      button {
        padding-left: 10px;
        font-size: 15px;
      }
    }
  }
`;
