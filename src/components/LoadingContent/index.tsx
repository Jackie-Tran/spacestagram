import React from 'react';
import { QueryStatus } from '../../api/useApiFetch';
import Spinner from '../../images/loader.gif';
import {
  ContentContainer,
  LoadingText,
  SpinnerContainer,
  SpinnerImage,
} from './LoadingContent.styled';

const LoadingSpinner: React.FC = () => (
  <SpinnerContainer>
    <SpinnerImage src={Spinner} alt="spinner" />
  </SpinnerContainer>
);

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
