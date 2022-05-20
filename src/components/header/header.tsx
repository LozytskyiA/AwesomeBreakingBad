import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { CustomHeaderStyles as Styled } from './header.styles';
import { ICustomHeader } from './header.types';

export const CustomHeader: FC<ICustomHeader> = ({
  title,
  withBackArrowIcon,
  style,
  backArrowIconColor,
}) => {
  const { goBack } = useNavigation();

  return (
    <Styled.Wrapper style={style}>
      <Styled.HeaderTitle weight={700} size={24}>
        {title}
      </Styled.HeaderTitle>

      {withBackArrowIcon && (
        <Styled.BackArrowIcon
          type="backArrow"
          onPress={goBack}
          color={backArrowIconColor ? backArrowIconColor : 'white'}
        />
      )}
    </Styled.Wrapper>
  );
};
