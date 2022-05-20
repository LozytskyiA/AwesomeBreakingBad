import styled from 'styled-components/native';
import { PALETTE } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import { CustomIcon } from '../icon';
import { IInputStyles, IInputWrapperStyles, IWrapper } from './input.types';

export const InputStyles = {
  Wrapper: styled.View<IWrapper>`
    ${({ isRow }) => isRow && 'flex: 1'}
  `,
  InputWrapper: styled.View<IInputWrapperStyles>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    height: 56px;
    border-radius: 100px;
    background-color: ${({ background }) => background || PALETTE.gray.light};
  `,
  Input: styled.TextInput<IInputStyles>`
    width: 90%;
    height: 56px;
    font-size: ${({ fontSize }) =>
      fontSize ? FONTS.size[fontSize] : FONTS.size[16]};
    font-family: ${({ fontFamily }) =>
      fontFamily ? FONTS.family[fontFamily] : FONTS.family.regular};
    font-weight: ${({ fontWeight }) =>
      fontWeight ? FONTS.weight[fontWeight] : FONTS.weight[500]};
    color: ${({ color }) => (color ? color : PALETTE.mono.white)};
  `,
  Icon: styled(CustomIcon)``,
};
