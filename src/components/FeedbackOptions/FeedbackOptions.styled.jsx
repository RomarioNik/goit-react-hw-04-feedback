import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

export const ButtonListItem = styled.li``;

export const Button = styled.button`
  width: 100px;
  padding: 8px 0;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 8px;
  user-select: none;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.shadowButton};
  }
`;
