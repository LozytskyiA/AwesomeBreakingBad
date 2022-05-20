import { StyleProp, ViewStyle } from 'react-native';

export interface ICustomHeader {
  title: string;
  withBackArrowIcon?: boolean;
  backArrowIconColor?: string;
  style?: StyleProp<ViewStyle>;
}
