import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import colors from '../constants/Colors';
import { getPlatformOS } from '../utils/helpers';

const Box = ({ children }) => (
  <View style={styles.boxContainer}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: colors.white,
    borderRadius: getPlatformOS() === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

Box.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Box;
