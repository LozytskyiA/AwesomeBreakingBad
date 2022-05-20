import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { BlurStyles as Styled } from './blur.styles';

export const Blur = ({ onPress }: { onPress?: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Styled.BlurWrapper blurType="dark" blurAmount={3} />
    </TouchableWithoutFeedback>
  );
};
