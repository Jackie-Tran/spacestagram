/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import {
  ShowMoreText,
  TruncatedText,
  TruncatingTextContainer,
} from './TruncatingText.styled';

type TruncatingTextProps = {
  maxLength?: number;
};

export const TruncatingText: React.FC<TruncatingTextProps> = ({
  maxLength = 100,
  children,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <TruncatingTextContainer>
      {children && children?.toString().length > maxLength ? (
        <>
          <TruncatedText>
            {showMore
              ? children
              : `${children?.toString().substring(0, maxLength)}\u{02026}`}
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
