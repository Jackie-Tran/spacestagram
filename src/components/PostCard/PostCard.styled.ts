import styled from 'styled-components';

export const PostCardContainer = styled.div`
  background-color: white;
  border: 1px solid #c2c2c2;
  width: 35%;
  height: 45em;
  border-radius: 8px;
  overflow: hidden;
`;

export const RoverImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const CardContent = styled.div`
  padding: 0.5rem 0.75rem;
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
