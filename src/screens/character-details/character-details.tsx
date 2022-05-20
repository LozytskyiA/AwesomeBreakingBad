import { Route, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomHeader } from '../../components/header';
import { IMAGES } from '../../constants/images';
import { ICharacter } from '../../constants/types';
import { PALETTE } from '../../styles/colors';
import { CharacterDetailsStyles as Styled } from './character-details.styles';

export const CharacterDetails = () => {
  const {
    params: { character },
  } = useRoute<Route<string, { character: ICharacter }>>();

  return (
    <>
      <SafeAreaView style={{ backgroundColor: PALETTE.primary.darkWine }} />
      <CustomHeader title={character?.nickname} withBackArrowIcon />
      <Styled.Wrapper>
        <Styled.CharacterWrapper>
          <Styled.AvatarWrapper>
            <Styled.Avatar
              source={{ uri: character?.img }}
              resizeMode="cover"
            />
          </Styled.AvatarWrapper>
          <Styled.CharacteristicWrapper>
            <Styled.Name color={PALETTE.gray.main} size={18} weight={700}>
              {character?.name}
            </Styled.Name>

            <Styled.Occupation color={PALETTE.gray.main} size={14} weight={500}>
              Occupation:{' '}
            </Styled.Occupation>

            {character?.occupation.map((profession: string, index: number) => (
              <Styled.Occupation
                key={profession}
                color={PALETTE.gray.body}
                size={13}
                weight={400}
              >
                {profession}
                {character?.occupation.length - 1 === index ? '' : ','}
              </Styled.Occupation>
            ))}
            <Styled.LabelsWrapper>
              <Styled.LabelWrapper>
                <Styled.Label>{character?.status}</Styled.Label>
              </Styled.LabelWrapper>
            </Styled.LabelsWrapper>
          </Styled.CharacteristicWrapper>
        </Styled.CharacterWrapper>
        <Styled.SeasonAppearance
          color={PALETTE.gray.main}
          size={16}
          weight={700}
        >
          Season appearance:
        </Styled.SeasonAppearance>
        <ScrollView>
          <Styled.SeasonsWrapper>
            {character?.appearance.map((season: number, index: number) => (
              <Styled.SeasonPoster
                key={season}
                index={index}
                source={IMAGES[`season${season}`]}
              >
                <Styled.SeasonPosterOpacityBg />
                <Styled.Season size={16} weight={700}>
                  Season {season}
                </Styled.Season>
              </Styled.SeasonPoster>
            ))}
          </Styled.SeasonsWrapper>
        </ScrollView>
      </Styled.Wrapper>
    </>
  );
};
