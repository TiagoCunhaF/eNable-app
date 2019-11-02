import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 80%;
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
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    strong {
      color: #fff;
      font-size: 24px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Projeto = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  transition: all 0.2s;
  white-space: nowrap;
  flex-direction: column;

  opacity: ${props => (props.closed ? 0.6 : 1)};

  &:hover {
    transform: translateY(-5px);
  }

  div {
    strong {
      display: block;
      color: ${props => (props.closed ? '#999' : '#1f6cb1')};
      font-size: 20px;
      font-weight: normal;
      height: 30px;
    }

    span {
      margin-top: 3px;
      color: ${props => (props.closed ? '#999' : '#666')};
      margin-left: auto;
    }

    span + span {
      display: flex;
    }
  }

  & + div {
    column-count: 1;
  }
`;
