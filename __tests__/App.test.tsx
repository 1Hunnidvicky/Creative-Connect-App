/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

// Mock the navigation components
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: any) => children,
}));

jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({ children }: any) => children,
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: any) => children,
}));

// Mock the RootNavigator
jest.mock('../src/navigation/RootNavigator', () => ({
  RootNavigator: () => 'RootNavigator',
}));

// Mock the AuthService
jest.mock('../src/services/AuthService', () => ({
  AuthService: {
    onAuthStateChanged: jest.fn(() => () => {}),
  },
}));

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
