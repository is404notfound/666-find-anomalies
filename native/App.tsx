import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './screens/Game';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown : false,
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{
            headerShown : false,
          }}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
} 
