import styled from 'styled-components';

export const HomePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  margin-bottom: 5rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20%;
`;
