import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import { TFontFamilies, TFontSizes, TFontWeights } from '../../styles/fonts';
import { TIconNames } from '../icon';

export interface IInput {
  value: string;
  onChange: (value: string) => void | undefined;
  style?: StyleProp<ViewStyle>;
  background?: string;
  iconSize?: TFontSizes;
  iconColor?: string;
  iconType?: TIconNames;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  isRow?: boolean;
  maxLength?: number;
  placeholderTextColor?: string;
  textColor?: string;
  selectionColor?: string;
}

export interface IInputStyles {
  fontSize?: TFontSizes;
  fontFamily?: TFontFamilies;
  fontWeight?: TFontWeights;
  color?: string;
  isBeforeInputIcon?: boolean;
}

export interface IInputWrapperStyles {
  background?: string;
}

export interface IWrapper {
  isRow?: boolean;
}
