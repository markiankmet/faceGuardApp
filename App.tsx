import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
  LoginScreen,
  SignUpScreen,
  DoorScreen,
  ActivityScreen,
  SettingsScreen,
  UserProfileScreen,
} from './src/screens';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false, animation: 'fade' }}
        />
        <Stack.Screen
          name="Door"
          component={DoorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ headerShown: false, animation: 'none' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
