import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import MainTabNavigator from './MainTabNavigator';
import DeckScreen from '../screens/DeckScreen';
import AddCardScreen from '../screens/AddCardScreen';
import Colors from '../constants/Colors';

const MainStackNavigator = {
  Home: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: {
      headerTintColor: Colors.white,
      headerStyle: {
        marginTop: -Constants.statusBarHeight,
        backgroundColor: Colors.primary,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
  AddCardScreen: {
    screen: AddCardScreen,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: Colors.white,
      headerStyle: {
        marginTop: -Constants.statusBarHeight,
        backgroundColor: Colors.primary,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
};

export default createStackNavigator(MainStackNavigator, { headerMode: 'float' });
