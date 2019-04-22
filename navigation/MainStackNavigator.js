import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import colors from '../constants/Colors';

const MainStackNavigator = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
        paddingTop: 0,
      }
    }
  }
};

export default createStackNavigator(MainStackNavigator);
