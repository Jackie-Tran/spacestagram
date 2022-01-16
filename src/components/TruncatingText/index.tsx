import React, { useState } from 'react';
import {
  ShowMoreText,
  TruncatedText,
  TruncatingTextContainer,
} from './TruncatingText.styled';

export const TruncatingText: React.FC = ({ children }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <TruncatingTextContainer>
      {children && children?.toString().length > 100 ? (
        <>
          <TruncatedText>
            {showMore
              ? children
              : `${children?.toString().substring(0, 100)}\u{02026}`}
            &nbsp;
          </TruncatedText>
          <ShowMoreText onClick={toggleText}>
            {showMore ? 'less' : 'more'}
          </ShowMoreText>
        </>
      ) : (
        <TruncatedText>{children}</TruncatedText>
      )}
    </TruncatingTextContainer>
  );
};

export default TruncatingText;
