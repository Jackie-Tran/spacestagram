import styled from 'styled-components';

export const PostCardContainer = styled.div`
  background-color: white;
  border: 1px solid #c2c2c2;
  width: 80%;
  height: 30em;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const RoverImage = styled.img`
  width: 100%;
  flex: 4;
`;

export const CardContent = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const CardTitle = styled.h1`
  ${({ theme }) => theme.fonts.quicksand};
  font-weight: 700;
  font-size: 1.3em;
`;

export const CardText = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  font-weight: 500;
  font-size: 1.1em;
`;

export const LikeButton = styled.button`
  ${({ theme }) => theme.fonts.quicksand}
  background-color: white;
  border: solid 1px black;
  border-color: #c2c2c2;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.25s;
  &:hover {
    background-color: #f6f6f6;
  }

  &:active {
    background-color: #ededed;
  }
`;
