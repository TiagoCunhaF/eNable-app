import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from '../../services/history';

import api from '~/services/api';

import { Container, Projeto } from './styles';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [projectsFiltered, setProjectsFiltered] = useState([]);

  function projectDetail(id) {
    history.push(`/projectDetail/${id}`);
  }
  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('dashboard');

      setProjects(response.data);
      setProjectsFiltered(response.data);
    }

    loadProjects();
  }, []);

  async function handleFilter(event) {
    const updatedList = projects.filter(
      item =>
        item.project.name
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
    );
    setProjectsFiltered(updatedList);
  }

  return (
    <Container>
      <header>
        <strong>Projetos</strong>
        <Link to="/project">Novo Projeto</Link>
      </header>
      <form>
        <input
          name="search"
          placeholder="Filtrar projetos"
          onChange={handleFilter}
        />
      </form>
      <ul>
        {projectsFiltered.map(({ project, revenue, expenses, balance }) => (
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
