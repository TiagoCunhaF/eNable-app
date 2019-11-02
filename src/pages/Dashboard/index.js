import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from '../../services/history';

import api from '~/services/api';

import { Container, Projeto } from './styles';

Number.prototype.format = function(n, x) {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `R$ ${this.toFixed(Math.max(0, ~~n)).replace(
    new RegExp(re, 'g'),
    '$&,'
  )}`;
};

export default function Dashboard() {
  const [projetos, setProjetos] = useState([]);

  function projectDetail(id) {
    history.push(`/projectDetail/${id}`);
  }
  useEffect(() => {
    async function loadProjetos() {
      // const response = await api.get('projetos');
      const response = [];
      response.data = [
        {
          id: 1,
          name: 'Teste',
          owner: 'Everton Lins',
          dateStart: '01/10/2019',
          status: 'Em Andamento',
          revenue: 2000,
          expenses: 1200,
          balance: 800,
        },
        {
          id: 2,
          name: 'Outro',
          owner: 'Tiago Cunha',
          dateStart: '01/08/2019',
          status: 'Em Andamento',
          revenue: 200,
          expenses: 200,
          balance: 0,
        },
        {
          id: 3,
          name: 'Projeto Betim',
          owner: 'Everton Lins',
          dateStart: '01/09/2019',
          status: 'Em Andamento',
          revenue: 900,
          expenses: 100,
          balance: 800,
        },
        {
          id: 4,
          name: 'Teste fechado',
          owner: 'Everton Lins',
          dateStart: '01/10/2019',
          status: 'Encerrado',
          revenue: 900,
          expenses: 400,
          balance: 500,
          closed: true,
        },
        {
          id: 5,
          name: 'Teste',
          owner: 'Everton Lins',
          dateStart: '01/10/2019',
          status: 'Em Andamento',
          revenue: 400,
          expenses: 200,
          balance: 200,
        },
        {
          id: 6,
          name: 'Teste',
          owner: 'Everton Lins',
          dateStart: '01/10/2019',
          status: 'Em Andamento',
          revenue: 1300,
          expenses: 1000,
          balance: 300,
        },
      ];
      setProjetos(response.data);
    }

    loadProjetos();
  }, []);

  return (
    <Container>
      <header>
        <strong>Projetos</strong>
        <Link to="/project">Novo Projeto</Link>
      </header>

      <ul>
        {projetos.map(
          ({
            id,
            name,
            owner,
            dateStart,
            status,
            revenue,
            expenses,
            balance,
            closed,
          }) => (
            <Projeto key={id} closed={closed} onClick={() => projectDetail(id)}>
              <div>
                <strong>{name}</strong>
              </div>
              <div>
                <span>
                  <b>Inicio:</b>
                  {dateStart}
                </span>
                <span>
                  <b>Receita:</b> <span>{revenue.format(2)}</span>
                </span>
                <span>
                  <b>Despesas:</b>
                  <span>{expenses.format(2)}</span>
                </span>
                <span>
                  <b>Saldo:</b>
                  <span>{balance.format(2)}</span>
                </span>
              </div>
            </Projeto>
          )
        )}
      </ul>
    </Container>
  );
}
