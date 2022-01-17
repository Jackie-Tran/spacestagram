import styled from 'styled-components';

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const PostContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 70vw;
  height: 80%;
  margin-top: 5rem;
`;

export const Image = styled.img`
  width: 70%;
`;

export const PostSidePanel = styled.div`
  width: 80%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostTextSection = styled.div``;

export const PostTitle = styled.h1`
  ${({ theme }) => theme.fonts.quicksand};
  font-size: 1.75em;
  font-weight: 700;
`;

export const PostButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1rem;
`;
