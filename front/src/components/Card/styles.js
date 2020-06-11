import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 30px;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 1080px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const CardContainer = styled.li`
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
  border-top: 7px solid #35495e;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      margin-left: 12px;

      :hover {
        cursor: pointer;
      }
    }
  }

  strong {
    display: block;
    font-size: 16px;
    color: #333;
    margin-left: 10px;
  }

  span {
    font-size: 16px;
    color: #999;
    margin-top: 2px;
    margin-left: 10px;
  }

  p {
    color: #999;
    font-size: 14px;
    line-height:20px;
    margin: 10px;
  }
`;
