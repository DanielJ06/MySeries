import React from 'react';

import {
  Container,
  Content,
  InputContainer,
  SubmitBtn,
} from './styles';

function EditSerie(props) {
  return (
    <Container>
      <Content>
        <form>
          <InputContainer>
            <label htmlFor="name">{props.serie}:</label>
            <input name="name" type="text" required/>
          </InputContainer>

          <InputContainer>
            <label htmlFor="status">Status:</label>
            <select name="status">
              <option value="to-watch">Para assistir</option>
              <option value="watching">Assistindo</option>
              <option value="watched">Já assisti</option>
            </select>
          </InputContainer>

          <InputContainer>
            <label htmlFor="name">Pequena descrição:</label>
            <input name="desc" type="text" required/>
          </InputContainer>

          <SubmitBtn type="submit">Salvar</SubmitBtn>
        </form>
      </Content>
    </Container>
  );
}

export default EditSerie;
