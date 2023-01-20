import React from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';

interface IBasicButtonProps {
  children?: any;
  theme: BasicButtonTheme;
  onClick?: (e: any) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: object;
}

interface WrapperProps {
  border: string | number;
  background: string;
  textColor: string;
  textSize: string;
  textWeight: string;
  extra?: string;
  disabled?: boolean;
  borderRadius: number | string;
  width?: string;
  padding: string;
  lineHeight: string;
  minWidth: string;
  height: string;
}

export enum BasicButtonTheme {
  BlackRounded,
  WhiteRounded,
  GreyRounded,
  GreyF5Rounded,
  SuccesRounded,
  FailRounded,
  BlackInline,
  WhiteInline,
}

const buttonClassName = {
  [BasicButtonTheme.BlackRounded]: '',
  [BasicButtonTheme.WhiteRounded]: '',
  [BasicButtonTheme.GreyRounded]: '',
  [BasicButtonTheme.GreyF5Rounded]: '',
  [BasicButtonTheme.SuccesRounded]: '',
  [BasicButtonTheme.FailRounded]: '',
  [BasicButtonTheme.BlackInline]: '',
  [BasicButtonTheme.WhiteInline]: '',
};

const propsForTheme = {
  [BasicButtonTheme.BlackRounded]: {
    padding: '20px',
    textSize: '',
    textColor: theme.WHITE,
    textWeight: '500',
    lineHeight: '20px',
    borderRadius: '12px',
    border: 0,
    background: theme.BLACK,
    minWidth: '',
    height: '',
  },
  [BasicButtonTheme.WhiteRounded]: {
    padding: '20px',
    textSize: '16px',
    textColor: theme.BLACK,
    textWeight: '500',
    lineHeight: '20px',
    borderRadius: '12px',
    border: `0px`,
    background: theme.WHITE,
    minWidth: '',
    height: '',
  },
  [BasicButtonTheme.GreyRounded]: {
    padding: '20px',
    textSize: '14px',
    textColor: theme.WHITE,
    textWeight: '500',
    lineHeight: '100%',
    borderRadius: '8px',
    border: `0px`,
    background: theme.GRAY_AD,
    minWidth: '',
    height: '',
  },
  [BasicButtonTheme.GreyF5Rounded]: {
    padding: '20px',
    textSize: '14px',
    textColor: theme.BLACK,
    textWeight: '500',
    lineHeight: '100%',
    borderRadius: '8px',
    border: `0px`,
    background: theme.GRAY_F5,
    minWidth: '',
    width: '180px',
    height: '60px',
  },
  [BasicButtonTheme.SuccesRounded]: {
    padding: '20px',
    textSize: '16px',
    textColor: theme.WHITE,
    textWeight: '500',
    lineHeight: '20px',
    borderRadius: '12px',
    border: 0,
    background: theme.BLUE_SUCCES,
    minWidth: '',
    height: '',
  },
  [BasicButtonTheme.FailRounded]: {
    padding: '20px',
    textSize: '16px',
    textColor: theme.WHITE,
    textWeight: '500',
    lineHeight: '20px',
    borderRadius: '12px',
    border: 0,
    background: theme.RED_FAIL,
    minWidth: '',
    height: '',
  },
  [BasicButtonTheme.BlackInline]: {
    padding: '20px',
    textSize: '',
    textColor: theme.BLACK,
    textWeight: '500',
    lineHeight: '20px',
    borderRadius: '12px',
    border: `1px solid ${theme.GRAY_D1}`,
    background: theme.WHITE,
    minWidth: '',
    height: '',
  },
  [BasicButtonTheme.WhiteInline]: {
    padding: '20px',
    textSize: '16px',
    textColor: theme.WHITE,
    textWeight: '500',
    lineHeight: '20px',
    borderRadius: '12px',
    border: `1px solid ${theme.WHITE}`,
    background: 'rgba(0, 0, 0, 0.0)',
    minWidth: '',
    height: '',
  },
};

const ButtonWrapper = styled.button`
  align-items: center;
  justify-content: center;
  border: ${(p: WrapperProps) => p.border};
  border-radius: ${(p: WrapperProps) => p.borderRadius};
  background: ${(p: WrapperProps) => (p.disabled ? 'silver' : p.background)};
  cursor: ${(p: WrapperProps) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${(p: WrapperProps) => p.extra || ''}
  ${(p: WrapperProps) => (p.width ? `width: ${p.width};` : '')}
  padding: ${(p: WrapperProps) => p.padding};
  min-width: ${(p: WrapperProps) => p.minWidth};
  height: ${(p: WrapperProps) => p.height};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  color: ${(p: WrapperProps) => p.textColor};
  font-size: ${(p: WrapperProps) => p.textSize};
  line-height: ${(p: WrapperProps) => p.lineHeight};
  font-weight: ${(p: WrapperProps) => p.textWeight};
  text-align: center;
`;

const disabledStyleProps = {
  background: theme.LIGHT_GRAY,
  textColor: theme.WHITE,
  border: 'none',
};

export const BasicButton: React.FC<IBasicButtonProps> = props => {
  const { children, theme, onClick, disabled, type, style } = props;

  const className = buttonClassName[theme];
  const styleProps = propsForTheme[theme];
  const addProps = disabled ? disabledStyleProps : {};

  return (
    <ButtonWrapper
      type={type}
      {...{ ...styleProps, ...addProps }}
      className={className}
      onClick={!disabled ? onClick : (e: any) => {
        e.preventDefault();
      }}
      style={style}
    >
      <TextWrapper {...{ ...styleProps, ...addProps }}>{children}</TextWrapper>
    </ButtonWrapper>
  );
};
