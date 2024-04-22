import classNames from 'classnames';
import * as React from 'react';

type Props = {
  label: string | React.ReactNode;
  name?: string;
  requiredMark?: boolean;
};

export const TitleLabel = ({ label, name, requiredMark }: Props) => {
  return (
    <label
      htmlFor={name}
      className={classNames('label-component', {
        mark: requiredMark,
      })}
    >
      {label}
    </label>
  );
};
