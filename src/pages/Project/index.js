import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import DatePicker from '~/components/DatePicker';
import Select from '~/components/Select';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  status: Yup.string().required('O status é obrigatório'),
  dateStart: Yup.date().required('Informe a data de início do projeto'),
  owner: Yup.string().required('O responsável é obrigatório'),
});

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [estimatedCust, setEstimatedCust] = useState(0);
  const [averageCust, setAverageCust] = useState(0);

  useEffect(() => {
    async function getAverageCust() {
      const response = await api.get('averageCust');
      setAverageCust(response.data.averageCust);
    }
    getAverageCust();
  }, []);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('users');
      setUsers(
        response.data.map(user => ({
          id: user.id,
          title: user.name,
        }))
      );
    }
    getUsers();
  }, []);

  const statusList = [
    { id: 'Iniciado', title: 'Iniciado' },
    { id: 'Fechado', title: 'Fechado' },
    { id: 'Cancelado', title: 'Cancelado' },
    { id: 'Concluído', title: 'Concluído' },
  ];

  const initialData = {
    name: '',
    owner: '',
    dateStart: new Date(),
    status: 'Iniciado',
    goal: '',
    estimatedCust: 0,
  };

  async function handleSubmit(data) {
    try {
      await api.post('/projects', data);
      history.push('/dashboard');
    } catch (err) {
      toast.error('Falha no cadastro, verifique seus dados');
    }
  }

  return (
    <Container>
      <header>
        <strong>Novo Projeto</strong>
        <Link to="/Dashboard"> Cancelar</Link>
      </header>

      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" id="name" placeholder="Nome do projeto" />
        <Select
          name="owner"
          id="owner"
          placeholder="Responsável pelo projeto"
          options={users}
        />
        <Select
          name="status"
          id="status"
          placeholder="status"
          options={statusList}
        />
        <DatePicker
          name="dateStart"
          id="dateStart"
          placeholderText="Data Inicio"
        />
        <Input name="goalRevenue" placeholder="Objetivo de arrecadação" />
        <Input
          name="goalDonation"
          placeholder="Objetivo de doações - Qtd de próteses"
          onChange={event => setEstimatedCust(event.target.value * averageCust)}
        />
        <Input name="estimatedCust" value={estimatedCust} placeholder="Custo estimato do projeto" readOnly />
        <button type="submit">Criar Projeto</button>
      </Form>
    </Container>
  );
}
