import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from '../../services/history';

import api from '~/services/api';

import { Container, Projeto } from './styles';

export default function Dashboard() {
  const [projetos, setProjetos] = useState([]);

  function projectDetail(id) {
    history.push(`/projectDetail/${id}`);
  }
  useEffect(() => {
    async function loadProjetos() {
      const response = await api.get('dashboards');

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
        {projetos.map(({ project, revenue, expenses, balance }) => (
          <Projeto
            key={project.id}
            closed={project.closed}
            onClick={() => projectDetail(project.id)}
          >
            <div>
              <strong>{project.name}</strong>
            </div>
            <div>
              <span>
                <b>Inicio:</b>
                {project.dateStart}
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
        ))}
      </ul>
    </Container>
  );
}
