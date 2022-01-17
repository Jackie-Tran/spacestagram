import styled from 'styled-components';

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 5rem 0rem;
  @media screen and (min-width: 800px) {
    height: 100vh;
  }
`;

export const PostContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 85%;
  margin-top: 5rem;
  @media screen and (min-width: 600px) {
    width: 60%;
  }
  @media screen and (min-width: 800px) {
    width: 80%;
    height: 80%;
    flex-direction: row;
  }
  @media screen and (min-width: 1000px) {
    width: 90%;
    height: 80%;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    width: 70%;
    height: 80%;
    flex-direction: row;
  }
  @media screen and (min-width: 1400px) {
    width: 60%;
    height: 80%;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 18em;
  object-fit: cover;
  @media screen and (min-width: 800px) {
    width: 70%;
    height: 100%;
  }
  @media screen and (min-width: 1000px) {
    width: 70%;
    height: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 70%;
    height: 100%;
  }
`;

export const PostSidePanel = styled.div`
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  @media screen and (min-width: 800px) {
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
  }
`;

export const PostTitle = styled.h1`
  ${({ theme }) => theme.fonts.quicksand};
  font-size: 1.75em;
  font-size: 1.3em;
  font-weight: 700;
`;

export const PostButtons = styled.div`
  display: flex;
  margin-top: auto;
  gap: 1rem;
`;
