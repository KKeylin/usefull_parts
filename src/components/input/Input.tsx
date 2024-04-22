import * as React from 'react';

import { InputWrapComponent } from '../inputWrap';

export const InputComponent = (props: BaseInputType<React.ChangeEvent<HTMLInputElement>>): React.ReactElement => {
  const {
    requiredMark,
    errorMessage,
    label,
    type,
    placeholder,
    name,
    value,
    disabled,
    readOnly,
    onChange,
    onBlur,
    onKeyPress,
    autoFocus,
    additionalComponent,
  } = props;

  return (
    <InputWrapComponent
      errorMessage={errorMessage}
      disabled={disabled}
      label={label}
      requiredMark={requiredMark}
      name={name}
      value={value}
      additionalComponent={additionalComponent}
    >
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value || ''}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        className='input-component'
        autoFocus={autoFocus}
      />
    </InputWrapComponent>
  );
};
