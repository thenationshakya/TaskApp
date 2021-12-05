import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import CheckList from './screens/CheckList';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/Notes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notes"
          component={NoteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckList"
          component={CheckList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
