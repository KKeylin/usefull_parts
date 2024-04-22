import * as React from 'react';

type Props = {
  errorMessage?: string;
};

export const ErrorLabel = ({ errorMessage }: Props) => {
  return <span className='input-error-component'>{errorMessage}</span>;
};
