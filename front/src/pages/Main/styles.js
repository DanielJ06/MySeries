import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 50px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
