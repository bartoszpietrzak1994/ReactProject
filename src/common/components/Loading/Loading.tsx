import React from 'react';

type Props = {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

const Loading = ({ isLoading, isError, error }: Props) => {
  return (
    <>
      {isError && <div>${`${error}`}</div>}
      {isLoading && <div>Loading...</div>}
    </>
  );
};

export default Loading;
