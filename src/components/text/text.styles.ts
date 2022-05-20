import styled from 'styled-components/native';
import { PALETTE } from '../../styles/colors';
import {
  FONTS,
  TFontFamilies,
  TFontSizes,
  TFontWeights,
} from '../../styles/fonts';

interface ITextStyles {
  color?: string;
  family?: TFontFamilies;
  weight?: TFontWeights;
  size?: TFontSizes;
}

export const TextStyles = {
  Text: styled.Text<ITextStyles>`
    font-size: ${({ size }) => (size ? FONTS.size[size] : FONTS.size[16])};
    font-family: ${({ family }) =>
      family ? FONTS.family[family] : FONTS.family.regular};
    font-weight: ${({ weight }) =>
      weight ? FONTS.weight[weight] : FONTS.weight[500]};
    color: ${({ color }) => (color ? color : PALETTE.mono.white)};
  `,
};
