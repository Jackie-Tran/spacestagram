import styled from 'styled-components';

export const PostCardContainer = styled.div`
  background-color: white;
  border: 1px solid #c2c2c2;
  width: 85%;
  min-height: 30em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    width: 60%;
    min-height: 35em;
  }
  @media screen and (min-width: 800px) {
    width: 50%;
    min-height: 35em;
  }
  @media screen and (min-width: 1000px) {
    width: 80%;
    min-height: 35em;
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
    min-height: 35em;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 18em;
  object-fit: cover;
  @media screen and (min-width: 600px) {
    height: 20em;
  }
  @media screen and (min-width: 1000px) {
    height: 25em;
  }
`;

export const CardContent = styled.div`
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  flex: 1;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  ${({ theme }) => theme.fonts.quicksand};
  font-weight: 700;
  font-size: 1.3em;
`;

export const CardDate = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  font-weight: 600;
  font-size: 1.2em;
`;

export const CardText = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  font-weight: 500;
  font-size: 1em;
  margin: 0.5rem 0rem;
`;

export const LikeButton = styled.button`
  ${({ theme }) => theme.fonts.quicksand}
  background-color: white;
  border: solid 1px black;
  border-color: #c2c2c2;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.25s;
  cursor: pointer;
  margin-top: auto;
  &:hover {
    background-color: #f6f6f6;
  }

  &:active {
    background-color: #ededed;
  }
`;
