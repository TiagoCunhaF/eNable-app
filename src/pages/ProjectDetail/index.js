import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, Projeto } from './styles';

export default function Dashboard() {
  const [project, setProject] = useState('');
  useEffect(() => {
    async function loadProject() {
      // const response = await api.get('projetos');
      const response = [];
      response.data = {
        id: 1,
        name: 'Teste',
        owner: 'Everton Lins',
        dateStart: '01/10/2019',
        status: 'Em Andamento',
        revenue: (2000).format(2),
        expenses: (1200).format(2),
        balance: (800).format(2),
      };
      setProject(response.data);
    }

    loadProject();
  }, []);

  return (
    <Container>
      <header>
        <strong>Detalhes do Projeto</strong>
      </header>

      <Projeto key={project.id} closed={project.closed}>
        <div>
          <strong>{project.name}</strong>
        </div>
        <div>
          <span>
            <b>Inicio:</b>
            {project.dateStart}
          </span>
          <span>
            <b>Receita:</b> <span>{project.revenue}</span>
          </span>
          <span>
            <b>Despesas:</b>
            <span>{project.expenses}</span>
          </span>
          <span>
            <b>Saldo:</b>
            <span>{project.balance}</span>
          </span>
        </div>
      </Projeto>
      <ul>
        <div>
          <strong>Receitas</strong>
        </div>
        <div>
          <strong>Despesas</strong>
        </div>
      </ul>
    </Container>
  );
}
