import React from 'react';
import { QueryStatus } from '../../context/useApiFetch';
import LightSpinner from '../../images/light-loader.gif';
import DarkSpinner from '../../images/dark-loader.gif';
import {
  ContentContainer,
  LoadingText,
  SpinnerContainer,
  SpinnerImage,
} from './LoadingContent.styled';
import useColorMode from '../../hooks/useColorMode';

const LoadingSpinner: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <SpinnerContainer>
      <SpinnerImage
        src={colorMode === 'light' ? LightSpinner : DarkSpinner}
        alt="spinner"
      />
    </SpinnerContainer>
  );
};

type LoadingContentProps = {
  queryStatus: QueryStatus;
  noDataCondition: boolean;
};

const LoadingContent: React.FC<LoadingContentProps> = ({
  queryStatus,
  noDataCondition,
  children,
}) => {
  if (queryStatus === 'LOADING') {
    return (
      <ContentContainer>
        <LoadingSpinner />
      </ContentContainer>
    );
  }
  if (queryStatus === 'FAIL') {
    return (
      <ContentContainer>
        <LoadingText>An error has occured refresh and try again.</LoadingText>
      </ContentContainer>
    );
  }
  if (noDataCondition) {
    return (
      <ContentContainer>
        <LoadingText>
          There were no results from these set of filters. Try again with
          different filters.
        </LoadingText>
      </ContentContainer>
    );
  }
  return <ContentContainer>{children}</ContentContainer>;
};

export default LoadingContent;
