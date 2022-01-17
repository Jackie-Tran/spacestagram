import styled from 'styled-components';

export const HomePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 80%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1200px) {
    width: 60%;
  }

  @media screen and (min-width: 1600px) {
    width: 50%;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
  @media screen and (min-width: 1600px) {
    width: 30%;
  }
`;
