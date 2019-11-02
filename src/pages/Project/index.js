import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import api from '~/services/api';

import { Container } from './styles';

Number.prototype.format = function(n, x) {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `R$ ${this.toFixed(Math.max(0, ~~n)).replace(
    new RegExp(re, 'g'),
    '$&,'
  )}`;
};

export default function Dashboard() {
  const [project, setProject] = useState([]);
  const initialData = {
    name: '',
    owner: '',
    dateStart: Date(),
    status: 'Aberto',
  };

  function handleSubmit(data) {
    // dispatch(createProjectRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Novo Projeto</strong>
        <Link to="/Dashboard"> Cancelar</Link>
      </header>

      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do projeto" />
        <Input name="owner" placeholder="Responsável pelo projeto" />
        <Input name="startDate" placeholder="DD/MM/YYYY" />

        <button type="submit">Criar Projeto</button>
      </Form>
    </Container>
  );
}
