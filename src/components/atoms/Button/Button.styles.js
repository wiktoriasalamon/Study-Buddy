import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
