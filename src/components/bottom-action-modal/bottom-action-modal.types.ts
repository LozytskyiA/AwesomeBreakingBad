import { BottomSheetProps } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { RefObject } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface IBottomActionModal extends BottomSheetProps {
  bottomSheetRef: RefObject<BottomSheetMethods>;
  onPress?: () => void;
  isBlur: boolean;
  closeModal: () => void;
  style?: StyleProp<ViewStyle>;
}
