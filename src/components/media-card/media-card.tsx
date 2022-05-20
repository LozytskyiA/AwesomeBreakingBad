import React, { FC } from 'react';
import { Layout, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { ACTIVE_OPACITY } from '../../constants/button';
import { IMAGES } from '../../constants/images';
import { MediaCardStyles as Styled } from './media-card.styles';
import { IMediaCard } from './media-card.types';

export const MediaCard: FC<IMediaCard> = (props) => {
  const { name, numColumns, onPress, uri, style } = props;

  const onPressHandle = () => {
    onPress();
  };
  return (
    <Styled.Wrapper
      entering={SlideInRight}
      exiting={SlideOutRight}
      layout={Layout.springify()}
      numColumns={numColumns}
      style={style}
    >
      <Styled.ClickableWrapper
        onPress={onPressHandle}
        activeOpacity={ACTIVE_OPACITY}
      >
        <Styled.MediaCard resizeMode="cover" source={{ uri }} />

        <Styled.BackgroundSVG source={IMAGES.opacityInfoBg} />
        <Styled.InfoWrapper>
          <Styled.UserName size={14} weight={700}>
            {name}
          </Styled.UserName>
        </Styled.InfoWrapper>
      </Styled.ClickableWrapper>
    </Styled.Wrapper>
  );
};
