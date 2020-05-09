import React, { useState } from 'react'

import api from '../../services/api';

import {
  Container,
  InputContainer,
  SubmitBtn
} from './styles';

function Form() {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [bio, setBio] = useState('')

  async function handleAddSerie() {
    const res = await api.post('/serie', {
      name,
      status,
      bio
    })
  }

  return (
    <Container>
      <strong>Adicionar Série</strong>
      <form onSubmit={handleAddSerie} >
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" required/>
        </InputContainer>

        <InputContainer>
          <label htmlFor="status">Status:</label>
          <select value={status} onChange={(e) =>setStatus(e.target.value)} name="status">
            <option value="to-watch">Para assistir</option>
            <option value="watching">Assistindo</option>
            <option value="watched">Já assisti</option>
          </select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="name">Pequena descrição:</label>
          <input value={bio} onChange={(e) => setBio(e.target.value)} name="desc" type="text" required/>
        </InputContainer>

        <SubmitBtn type="submit">Salvar</SubmitBtn>
      </form>
    </Container>
  );
}

export default Form
