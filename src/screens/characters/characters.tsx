import React from 'react';
import {
  FlatList,
  Keyboard,
  ListRenderItem,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { BottomActionModal } from '../../components/bottom-action-modal';
import { CustomHeader } from '../../components/header';
import { Loader } from '../../components/loader';
import { MediaCard } from '../../components/media-card';
import { CustomText } from '../../components/text';
import { PALETTE } from '../../styles/colors';
import { SEASONS_LIST } from './characters.constants';
import { useCharactersState } from './characters.state';
import { CharactersStyles as Styled, styles } from './characters.styles';

export const Characters = () => {
  const {
    getFilteredCharacters,
    setValue,
    value,
    top,
    goToCharacterDetails,
    isLoading,
    closeFilterModal,
    isBlur,
    openFilterModal,
    snapPoints,
    bottomSheetRef,
    filters,
    clearFilters,
    onRemoveFilter,
    onCheckboxPress,
    checkboxList,
  } = useCharactersState();

  const renderMediaItem: ListRenderItem<any> = ({ item }) => (
    <MediaCard
      name={item?.name}
      numColumns={2}
      uri={item?.img}
      onPress={goToCharacterDetails(item)}
    />
  );

  return (
    <Styled.Wrapper>
      <CustomHeader title="Breaking Bad" style={{ marginTop: top }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Styled.ContentWrapper>
          <Styled.InputWrapper>
            <Styled.Input
              value={value}
              onChange={setValue}
              iconType="search"
              placeholder="Search in Breaking Bad"
              background={PALETTE.secondary.darkWine10}
              selectionColor={PALETTE.secondary.darkWine60}
              iconColor={PALETTE.secondary.darkWine60}
              isRow
            />
          </Styled.InputWrapper>
          <Styled.TitleWrapper>
            <CustomText weight={700} size={18}>
              Explore characters
            </CustomText>
            <Styled.TitleRightSide>
              <TouchableOpacity onPress={clearFilters}>
                <Styled.ClearFiltersText
                  size={14}
                  weight={700}
                  color={PALETTE.secondary.darkWine60}
                >
                  Clear
                </Styled.ClearFiltersText>
              </TouchableOpacity>

              <Styled.FilterIcon
                type="filter"
                color={PALETTE.secondary.darkWine60}
                onPress={openFilterModal}
              />
            </Styled.TitleRightSide>
          </Styled.TitleWrapper>

          <Styled.FilterLabelsWrapper>
            {filters?.map((filter) => (
              <Styled.FilterLabel key={filter}>
                <Styled.FilterLabelText
                  size={12}
                  weight={500}
                  color={PALETTE.secondary.darkWine60}
                >
                  Season {filter}
                </Styled.FilterLabelText>
                <Styled.FilterLabelDelete
                  type="closeCross"
                  size={10}
                  color={PALETTE.secondary.darkWine60}
                  onPress={onRemoveFilter(filter)}
                />
              </Styled.FilterLabel>
            ))}
          </Styled.FilterLabelsWrapper>

          <FlatList
            renderItem={renderMediaItem}
            data={getFilteredCharacters()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.3}
            contentContainerStyle={styles.flatListContainer}
            columnWrapperStyle={styles.flatListColumn}
            keyExtractor={(item) => item.name}
          />
          <BottomActionModal
            bottomSheetRef={bottomSheetRef}
            snapPoints={snapPoints}
            closeModal={closeFilterModal}
            isBlur={isBlur}
          >
            <Styled.FilterWrapper>
              <Styled.FilterTitle
                size={20}
                color={PALETTE.primary.darkWine}
                weight={700}
              >
                Filter by season
              </Styled.FilterTitle>
              <Styled.CheckBoxWrapper>
                {SEASONS_LIST.map((season: number) => (
                  <Styled.CheckBox
                    key={season}
                    size={32}
                    fillColor={PALETTE.primary.wine}
                    text={`Season ${season}`}
                    iconStyle={{ borderColor: PALETTE.primary.wine }}
                    textStyle={styles.checkBoxTextStyle}
                    onPress={onCheckboxPress(season)}
                    disableBuiltInState
                    isChecked={checkboxList.includes(season)}
                  />
                ))}
              </Styled.CheckBoxWrapper>
              <Styled.Button onPress={closeFilterModal}>
                <CustomText size={16} weight={700}>
                  Select
                </CustomText>
              </Styled.Button>
            </Styled.FilterWrapper>
          </BottomActionModal>
        </Styled.ContentWrapper>
      </TouchableWithoutFeedback>

      {isLoading && <Loader />}
    </Styled.Wrapper>
  );
};
