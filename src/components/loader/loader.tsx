import LottieView from 'lottie-react-native';
import React from 'react';
import { ANIMATIONS } from '../../constants/animations';
import { LoaderStyles as Styled } from './loader.styles';

export const Loader = () => {
  return (
    <>
      <Styled.BlurView blurType="ultraThinMaterialDark" blurAmount={10} />
      <LottieView
        source={ANIMATIONS.loader}
        autoPlay
        loop
        resizeMode="contain"
      />
    </>
  );
};
