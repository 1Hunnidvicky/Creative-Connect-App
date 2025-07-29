import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthScreen } from '../screens/AuthScreen';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

interface RootNavigatorProps {
  isAuthenticated: boolean;
  onAuthenticated: () => void;
  onLogout: () => void;
}

export const RootNavigator: React.FC<RootNavigatorProps> = ({
  isAuthenticated,
  onAuthenticated,
  onLogout,
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth">
          {() => <AuthScreen onAuthenticated={onAuthenticated} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Main">
          {() => <MainTabNavigator onLogout={onLogout} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};