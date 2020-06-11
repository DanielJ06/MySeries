import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 95px 150px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`

  label {
    color: #8d8d8d;
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 12px;
  }

  input {
    width: 100%;
    height: 60px;
    font-size: 14px;
    color: #666;
    border-radius: 8px;
    border: 1px solid #dcdce6;
    padding: 0 24px;
    margin-bottom: 12px;
  }

  select {
    width: 100%;
    height: 33px;
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  border: 0;
  margin-top: 15px;
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
