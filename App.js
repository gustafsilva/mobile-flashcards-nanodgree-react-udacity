/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './store';
import colors from './constants/Colors';
import FlashMobileStatusBar from './components/FlashMobileStatusBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashMobileStatusBar backgroundColor={colors.primary} />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
