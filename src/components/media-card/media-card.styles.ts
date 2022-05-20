import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { PALETTE } from '../../styles/colors';
import { CustomIcon } from '../icon';
import { CustomText } from '../text';

export const MediaCardStyles = {
  Wrapper: styled(Animated.View)<{ numColumns: number }>`
    align-items: center;
    width: ${({ numColumns }) => (numColumns ? 98 / numColumns : 100)}%;
    justify-content: center;
    margin-bottom: 14px;
  `,
  ClickableWrapper: styled.TouchableOpacity`
    width: 96%;
    max-height: 240px;
    border-radius: 20px;
    justify-content: center;
  `,
  PickerCardWrapper: styled.View`
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;
    opacity: 0.5;
    background-color: ${PALETTE.primary.darkWine};
  `,
  PickedIcon: styled(CustomIcon)`
    position: absolute;
    align-self: center;
  `,
  MediaCard: styled(FastImage)`
    height: 240px;
    width: 100%;
    border-radius: 20px;
  `,
  MediaCardGallery: styled.Image`
    height: 240px;
    width: 100%;
    border-radius: 20px;
  `,
  VideoIcon: styled(CustomIcon)`
    position: absolute;
    right: 16px;
    top: 16px;
  `,
  VideoDuration: styled(CustomText)`
    position: absolute;
    bottom: 8px;
    right: 12px;
  `,
  InfoWrapper: styled.View`
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
  `,
  UserName: styled(CustomText)`
    margin-bottom: 4px;
  `,
  UserProfession: styled(CustomText)``,
  UserInfoOpacity: styled.View`
    position: absolute;
    background-color: #00000040;
    align-self: center;
    width: 110%;
    height: 110%;
  `,
  BackgroundSVG: styled.Image`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  `,
};
