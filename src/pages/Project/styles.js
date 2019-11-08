import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: left;
    align-items: left;
    align-items: baseline;

    a {
      margin-left: auto;
      background: #fb6f91;

      font-weight: bold;
      color: #fff;
      border: 0;
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#fb6f91')};
      }
    }

    strong {
      color: #fff;
      font-size: 24px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }
`;
