import { StyleProp, ViewStyle } from 'react-native';

export interface IMediaCard {
  isSmall?: boolean;
  numColumns: number;
  name: string;
  uri: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
