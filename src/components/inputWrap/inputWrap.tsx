import classNames from 'classnames';
import * as React from 'react';

import { ErrorLabel } from '../errorLabel';
import { TitleLabel } from '../titleLabel';

type Props = {
  errorMessage?: string;
  disabled?: boolean;
  label?: string | React.ReactNode;
  value?: string;
  name: string;
  requiredMark?: boolean;
  children: React.ReactNode;
  additionalInfo?: string;
  additionalComponent?: Function;
};

export const InputWrapComponent = (props: Props): React.ReactElement => {
  const { errorMessage, disabled, label, children, name, requiredMark, additionalInfo, additionalComponent } = props;

  const hasError = errorMessage && !!errorMessage.length;

  return (
    <div
      className={classNames('input-wrap', {
        error: hasError,
        disabled: disabled,
      })}
    >
      <div className='input-info'>
        {label && <TitleLabel name={name} label={label} requiredMark={requiredMark} />}
        {label && <span className='additional-info'>{additionalInfo}</span>}
      </div>
      {children}
      {hasError && <ErrorLabel errorMessage={errorMessage} />}
      {additionalComponent && additionalComponent()}
    </div>
  );
};
