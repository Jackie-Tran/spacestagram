import styled from 'styled-components';

export const HomePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
