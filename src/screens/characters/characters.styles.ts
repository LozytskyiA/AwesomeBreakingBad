import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { CustomIcon } from '../../components/icon';
import { Input } from '../../components/input';
import { CustomText } from '../../components/text';
import { PALETTE } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const AnimatedFilterLabelsWrapper = Animated.createAnimatedComponent(View);

export const CharactersStyles = {
  Wrapper: styled.View`
    flex: 1;
    background-color: ${PALETTE.primary.darkWine};
  `,
  ContentWrapper: styled.View`
    flex: 1;
  `,
  InputWrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 16px;
    margin-top: 8px;
    height: 56px;
    margin-bottom: 24px;
  `,
  Input: styled(Input)``,
  TitleWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom: 8px;
  `,
  TitleRightSide: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  ClearFiltersText: styled(CustomText)`
    margin-right: 8px;
  `,
  FilterLabelsWrapper: styled(AnimatedFilterLabelsWrapper)`
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -5px;
    padding: 0 16px;
    margin-bottom: 16px;
  `,
  FilterLabel: styled(Animated.View)`
    padding: 12px;
    background-color: ${PALETTE.secondary.darkWine10};
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
    margin-top: 8px;
  `,
  FilterLabelText: styled(CustomText)`
    margin-right: 11px;
  `,
  FilterLabelDelete: styled(CustomIcon)``,

  FilterWrapper: styled.View`
    padding: 0 16px;
  `,
  FilterTitle: styled(CustomText)`
    margin-bottom: 24px;
    margin-top: 8px;
  `,
  FilterIcon: styled(CustomIcon)``,
  CheckBoxWrapper: styled.View`
    margin-bottom: 24px;
  `,
  CheckBox: styled(BouncyCheckbox)`
    margin-bottom: 12px;
  `,
  Button: styled.TouchableOpacity`
    background-color: ${PALETTE.primary.wine};
    height: 56px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
  `,
};

export const styles = StyleSheet.create({
  flatListContainer: {
    padding: 16,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
  checkBoxTextStyle: {
    fontFamily: FONTS.family.regular,
    textDecorationLine: 'none',
    fontSize: 14,
  },
});
