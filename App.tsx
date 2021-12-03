import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CheckList from './src/screens/CheckList';

import HomeScreen from './src/screens/HomeScreen';
import NoteScreen from './src/screens/Notes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Notes" component={NoteScreen} options={{headerShown: false}} />
        <Stack.Screen name="Check List" component={CheckList} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
