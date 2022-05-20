import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '../../navigation/root/root.navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
