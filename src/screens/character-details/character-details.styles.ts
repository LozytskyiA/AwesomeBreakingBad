import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { CustomText } from '../../components/text';
import { PALETTE } from '../../styles/colors';

const { width } = Dimensions.get('screen');

export const CharacterDetailsStyles = {
  Wrapper: styled.View`
    flex: 1;
    background-color: ${PALETTE.mono.white};
    padding: 16px 16px 0;
  `,
  CharacterWrapper: styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 24px;
  `,
  AvatarWrapper: styled.View`
    overflow: hidden;
    border-radius: 20px;
    width: 140px;
    height: 180px;
    margin-right: 16px;
  `,
  Avatar: styled(FastImage)`
    height: 200px;
  `,
  CharacteristicWrapper: styled.View`
    width: 100%;
  `,
  Name: styled(CustomText)`
    margin-bottom: 12px;
    width: 62%;
  `,
  Occupation: styled(CustomText)`
    margin-bottom: 6px;
    width: 62%;
  `,
  LabelsWrapper: styled.View`
    margin-top: 8px;
    flex-direction: row;
    align-items: flex-start;
  `,
  LabelWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${PALETTE.secondary.red};
    padding: 0 13px;
    border-radius: 100px;
    height: 32px;
  `,
  Label: styled(CustomText)``,
  SeasonAppearance: styled(CustomText)`
    margin-bottom: 8px;
  `,
  SeasonsWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  `,
  SeasonPoster: styled(FastImage)<{ index: number }>`
    border-radius: 20px;
    height: 180px;
    width: ${(width - 32 - 24) / 3}px;
    margin-bottom: 12px;
    margin-right: ${({ index }) => ((index + 1) % 3 === 0 ? 0 : 12)}px;
  `,
  SeasonPosterOpacityBg: styled.View`
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.4;
    background-color: ${PALETTE.gray.body};
    height: 180px;
  `,
  Season: styled(CustomText)`
    text-align: center;
    padding-top: 8px;
  `,
};
