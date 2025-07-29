import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types';
import { HomeScreen } from '../screens/HomeScreen';
import { MeetupsScreen } from '../screens/MeetupsScreen';
import { IdeasScreen } from '../screens/IdeasScreen';
import { OpportunitiesScreen } from '../screens/OpportunitiesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

interface MainTabNavigatorProps {
  onLogout: () => void;
}

const ProfileScreenWrapper: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
  <ProfileScreen onLogout={onLogout} />
);

export const MainTabNavigator: React.FC<MainTabNavigatorProps> = ({ onLogout }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#ddd',
          borderTopWidth: 1,
          paddingTop: 5,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <span>🏠</span>, // Using emoji as placeholder for icons
        }}
      />
      <Tab.Screen
        name="Meetups"
        component={MeetupsScreen}
        options={{
          tabBarLabel: 'Meetups',
          tabBarIcon: () => <span>👥</span>,
        }}
      />
      <Tab.Screen
        name="Ideas"
        component={IdeasScreen}
        options={{
          tabBarLabel: 'Ideas',
          tabBarIcon: () => <span>💡</span>,
        }}
      />
      <Tab.Screen
        name="Opportunities"
        component={OpportunitiesScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: () => <span>💼</span>,
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <span>👤</span>,
        }}
      >
        {() => <ProfileScreenWrapper onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};