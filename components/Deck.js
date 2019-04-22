import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';

const Deck = ({ title, questions }) => (
  <View>
    <Text style={[styles.title, styles.textCenter]}>
      {title}
    </Text>
    <Text style={[styles.lenQuestions, styles.textCenter]}>
      {`${questions.length} cards`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: Colors.black,
  },
  lenQuestions: {
    color: Colors.silver,
  },
  textCenter: {
    textAlign: 'center',
  },
});

Deck.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ decks }, { id }) => ({
  ...decks[id],
});

export default connect(mapStateToProps)(Deck);
