import React, { HTMLAttributes, useState, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { InputType } from 'reactstrap/types/lib/Input';

interface IBasicInputProps {
  className?: any
  className2?: any
  style?: object
  id?: string
  type?: InputType
  disabled?: boolean
  placeholder?: string
  value?: any
  onChangeRaw?: (e: React.FormEvent<HTMLInputElement>) => void
  onChange?: (data: any) => void
  onEnter?: () => void
  guideText?: string
  inputProps?: HTMLAttributes<HTMLInputElement>
  title?: string
  validators?: Function
  validatorMsg?: object
  error?: string
  warning?: string
  success?: string
  maxLength?: number
  ref?: any
  readOnly?: boolean
}


export const BasicInput: React.FC<IBasicInputProps> = forwardRef((props, ref: any) => {
  const {
    className,
    className2,
    style,
    id,
    placeholder,
    value,
    onChangeRaw,
    onChange,
    onEnter,
    guideText,
    type,
    title,
    inputProps = {},
    validators,
    maxLength,
    readOnly,
    ...cnProps
  } = props;

  const [showFocus, setShowFocus] = React.useState(true);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeRaw?.(e);
    // @ts-ignore
    onChange?.(e.target.value);
  };

  const handleKeydown = (e: any) => {
    if (e.key === 'Enter') {
      onEnter?.();
      e.preventDefault();
    }
  };
  const handleFocus = (showFocus: React.FocusEvent<HTMLInputElement>) => {
    setShowFocus(!showFocus);
  };

  const fn = classNames('fn-input', cnProps);
  const fnWrapper = classNames('fn-input-wrapper', {
    disabled: cnProps.disabled,
  });


  return (
    <div style={style}>
      <InputWrap className={fnWrapper}>
        <input
          type={type}
          style={value ? undefined : placeholderCss}
          id={id}
          disabled={cnProps.disabled}
          className={fn}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeydown}
          onFocus={handleFocus}
          {...inputProps}
          title={title}
          maxLength={maxLength}
          ref={ref}
          readOnly={readOnly}
        />
      </InputWrap>
    </div>
  );
});

const InputWrap = styled.div`
  .fn-input {
    font-size: 16px;
    font-weight: 500;
    background-color: #F5F6F8;
    border-radius: 12px;
    border: 0px;
    width: 100%;
    height: 53px;
    color: #000000 !important;
    padding: 1.5rem;
    outline: none;
  }
`;

const placeholderCss = { fontSize: 16, padding: '1.5rem', color: '#ADADAD !important' };

