import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

const FlashMobileStatusBar = ({ backgroundColor, ...rest }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...rest} />
  </View>
);

FlashMobileStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default FlashMobileStatusBar;
