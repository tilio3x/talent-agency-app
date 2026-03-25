import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.bgSecondary,
          borderBottomWidth: 1,
          borderBottomColor: Colors.borderColor,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTintColor: Colors.textPrimary,
        tabBarStyle: {
          backgroundColor: Colors.bgSecondary,
          borderTopColor: Colors.borderColor,
          paddingBottom: Platform.OS === 'ios' ? 24 : 10,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 88 : 64,
          elevation: 0,
        },
        tabBarActiveTintColor: Colors.accentSecondary,
        tabBarInactiveTintColor: Colors.textSecondary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'AuraTalent',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="talent"
        options={{
          title: 'Talent Directory',
          tabBarLabel: 'Talent',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-group" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Job Board',
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="briefcase-search" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
