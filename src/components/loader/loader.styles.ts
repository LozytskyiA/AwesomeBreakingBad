import { BlurView } from '@react-native-community/blur';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { PALETTE } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

export const LoaderStyles = {
  BlurView: styled(BlurView)`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  `,
};

export const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: FONTS.family.regular,
    color: PALETTE.secondary.darkWine30,
  },
});
