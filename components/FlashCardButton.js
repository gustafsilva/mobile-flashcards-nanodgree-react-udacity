import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { getPlatformOS } from '../utils/helpers';

const FlashCardButton = ({ backgroundColor, children, style }) => (
  <View style={[getPlatformOS() === 'ios' ? styles.buttonIos : styles.buttonAndroid, { backgroundColor }, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  buttonAndroid: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIos: {
    height: 45,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
  }
});

FlashCardButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FlashCardButton;
