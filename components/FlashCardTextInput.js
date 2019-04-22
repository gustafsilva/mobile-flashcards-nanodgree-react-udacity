import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors';
import { getPlatformOS } from '../utils/helpers';

const FlashCardTextInput = ({ value, placeholder, onChangeText }) => (
  <TextInput
    style={getPlatformOS() === 'ios' ? styles.titleInputIos : styles.titleInputAndroid}
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
  />
);

FlashCardTextInput.defaultProps = {
  placeholder: '',
};

FlashCardTextInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  titleInputAndroid: {
    backgroundColor: Colors.light,
    marginTop: 3,
    padding: 5,
    borderRadius: 2,
    borderColor: Colors.input,
    borderWidth: 1,
  },
  titleInputIos: {
    backgroundColor: Colors.light,
    marginTop: 3,
    padding: 7,
    borderRadius: 7,
    borderColor: Colors.input,
    borderWidth: 1,
  },
});

export default FlashCardTextInput;
