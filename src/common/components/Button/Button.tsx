import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row;
  width: 100%;
  padding: 24px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  opacity: 1;
  text-align: center;
  justify-content: center;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & :last-child {
    margin-top: 8px;
  }
`;