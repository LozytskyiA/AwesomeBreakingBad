import BottomSheet from '@gorhom/bottom-sheet';
import React, { FC } from 'react';
import { Blur } from '../blur';
import { styles } from './bottom-action-modal.styles';
import { IBottomActionModal } from './bottom-action-modal.types';

export const BottomActionModal: FC<IBottomActionModal> = ({
  bottomSheetRef,
  snapPoints,
  closeModal,
  isBlur,
  children,
}) => {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      backdropComponent={() => (isBlur ? <Blur onPress={closeModal} /> : null)}
    >
      {children}
    </BottomSheet>
  );
};
