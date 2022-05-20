import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ICharacter } from '../../constants/types';
import { fetchData } from '../../services/api-service';

export const useCharactersState = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState(false);
  const [filters, setFilters] = useState<number[]>([]);
  const [checkboxList, setCheckboxList] = useState<number[]>([]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation();

  const closeFilterModal = () => {
    onSelectPress();
    setIsBlur(false);
    bottomSheetRef?.current?.close();
  };

  const openFilterModal = () => {
    Keyboard.dismiss();
    setIsBlur(true);
    bottomSheetRef?.current?.snapToIndex(1);
  };

  const onCheckboxPress = (season: number) => () => {
    if (checkboxList.includes(season)) {
      const currentFilters = checkboxList.filter((item) => season !== item);
      return setCheckboxList(currentFilters);
    }

    setCheckboxList((prev) => [...prev, season]);
  };

  const onSelectPress = () => setFilters(checkboxList);

  const clearFilters = () => {
    setFilters([]);
    setCheckboxList([]);
  };

  const onRemoveFilter = (season: number) => () => {
    const notRemovedSeasons = filters.filter((item: number) => item !== season);

    setFilters(notRemovedSeasons);
    setCheckboxList(notRemovedSeasons);
  };

  const snapPoints = useMemo(() => [420, 420], []);

  const getFilteredCharacters = () => {
    return characters.filter((character: ICharacter) => {
      const isAppearance = filters.map((season: number) => {
        return character?.appearance.includes(season);
      });

      return (
        character.name.toLowerCase().includes(value.toLowerCase()) &&
        isAppearance.every((appearance: boolean) => appearance === true)
      );
    });
  };

  const getCharacters = async () => {
    try {
      setIsLoading(true);

      const listOfCharacters: ICharacter[] = await fetchData({
        requestUrl: 'characters',
      });

      setCharacters(listOfCharacters);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToCharacterDetails = (character: {}) => () => {
    navigate('Hello', {
      character,
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    getFilteredCharacters,
    setValue,
    value,
    top,
    goToCharacterDetails,
    isLoading,
    isBlur,
    closeFilterModal,
    openFilterModal,
    snapPoints,
    bottomSheetRef,
    onCheckboxPress,
    filters,
    clearFilters,
    onSelectPress,
    onRemoveFilter,
    checkboxList,
  };
};
