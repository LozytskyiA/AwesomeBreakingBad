import React, { FC } from 'react';
import { PALETTE } from '../../styles/colors';
import { InputStyles as Styled } from './input.styles';
import { IInput } from './input.types';

export const Input: FC<IInput> = (props) => {
  const {
    value,
    onChange,
    style,
    background,
    iconSize,
    iconColor,
    iconType,
    placeholder,
    keyboardType,
    isRow,
    maxLength,
    placeholderTextColor,
    textColor,
    selectionColor,
  } = props;

  return (
    <Styled.Wrapper isRow={isRow} style={style}>
      <Styled.InputWrapper background={background}>
        {iconType && (
          <Styled.Icon
            type={iconType}
            color={iconColor ? iconColor : 'main'}
            size={iconSize ? iconSize : 26}
          />
        )}
        <Styled.Input
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : PALETTE.secondary.darkWine30
          }
          keyboardType={keyboardType ? keyboardType : 'default'}
          selectionColor={
            selectionColor ? selectionColor : PALETTE.primary.darkWine
          }
          numberOfLines={1}
          maxLength={maxLength}
          color={textColor}
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
};
