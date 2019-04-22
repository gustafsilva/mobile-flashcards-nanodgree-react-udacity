import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const MainStackNavigator = {
  Home: {
    screen: HomeScreen,
  }
};

export default createStackNavigator(MainStackNavigator);
