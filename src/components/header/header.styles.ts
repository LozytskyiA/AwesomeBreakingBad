import styled from 'styled-components/native';
import { PALETTE } from '../../styles/colors';
import { CustomIcon } from '../icon';
import { CustomText } from '../text';

export const CustomHeaderStyles = {
  Wrapper: styled.View`
    background-color: ${PALETTE.primary.darkWine};
    height: 48px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  HeaderTitle: styled(CustomText)``,
  CloseIcon: styled(CustomIcon)`
    position: absolute;
    right: 16px;
  `,
  BackArrowIcon: styled(CustomIcon)`
    position: absolute;
    left: 16px;
  `,
};
