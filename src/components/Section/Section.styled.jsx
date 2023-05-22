import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.mainText};
`;
