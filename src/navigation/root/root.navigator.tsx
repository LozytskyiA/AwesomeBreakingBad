import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CharacterDetails } from '../../screens/character-details';
import { Characters } from '../../screens/characters';
import { WITHOUT_HEADER_OPTION } from './root.constants';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Characters"
        component={Characters}
        options={WITHOUT_HEADER_OPTION}
      />
      <RootStack.Screen
        name="Hello"
        component={CharacterDetails}
        options={WITHOUT_HEADER_OPTION}
      />
    </RootStack.Navigator>
  );
};
