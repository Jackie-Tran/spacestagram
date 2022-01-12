import styled from 'styled-components';

export const HomePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
`;
