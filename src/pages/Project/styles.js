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
`;
