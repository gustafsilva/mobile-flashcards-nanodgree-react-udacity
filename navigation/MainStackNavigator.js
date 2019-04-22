import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const MainStackNavigator = {
  Home: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
};

export default createStackNavigator(MainStackNavigator);
