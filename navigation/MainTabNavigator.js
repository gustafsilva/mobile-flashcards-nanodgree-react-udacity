import React from 'react';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import colors from '../constants/Colors';
import { getPlatformOS } from '../utils/helpers';

const RouteConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-list-box" size={30} color={tintColor} />
    }
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-add" size={30} color={tintColor} />
    }
  },
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: getPlatformOS() === 'ios' ? colors.primary : colors.white,
    style: {
      height: 56,
      backgroundColor: getPlatformOS() === 'ios' ? colors.white : colors.primary,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tabs = getPlatformOS() === 'ios'
  ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
  : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

export default createAppContainer(Tabs);
