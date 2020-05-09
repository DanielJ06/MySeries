import styled from 'styled-components';

export const Container = styled.aside`
  width: 320px;
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  margin-top:20px;

  label {
    color: #8d8d8d;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 33px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid rgb(226, 226, 226);
  }

  select {
    width: 100%;
    height: 33px;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
    width: 100%;
  border: 0;
  margin-top: 30px;
  background: #35495e;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  transition: background 0.5s;

  :hover {
    background: #30415e;
  }
`;
