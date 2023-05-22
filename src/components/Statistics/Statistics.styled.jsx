import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`;

export const FeedbackItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f0f0f0;
  outline: 4px solid #f0f0f0;
  box-shadow: inset 1px 1px 2px 0px rgba(0, 0, 0, 0.3),
    inset -1px -1px 2px 0px rgba(0, 0, 0, 0.3);
`;

export const FeedbackCount = styled.span`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.secondText};
  user-select: none;
`;

export const FeedbackCountList = styled.ul`
  width: 100%;
  max-width: 400px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const FeedbackCountItem = styled.li`
  margin-bottom: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

export const TextTotalCount = styled.p``;
