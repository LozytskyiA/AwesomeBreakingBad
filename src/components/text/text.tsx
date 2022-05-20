import React, { FC, ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { TFontFamilies, TFontSizes, TFontWeights } from '../../styles/fonts';
import { TextStyles as Styled } from './text.styles';

interface ICustomText {
  children: ReactNode;
  color?: string;
  family?: TFontFamilies;
  weight?: TFontWeights;
  size?: TFontSizes;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const CustomText: FC<ICustomText & Text> = (props) => {
  const { children, style, color, family, size, weight, numberOfLines } = props;

  return (
    <Styled.Text
      weight={weight}
      color={color}
      family={family}
      size={size ? size : 14}
      style={style}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
    >
      {children}
    </Styled.Text>
  );
};
