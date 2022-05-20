import { StyleProp, ViewStyle } from 'react-native';
import { TIconNames } from './icon';

export interface ICustomIconProps {
  type: TIconNames;
  color?: string;
  size?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
