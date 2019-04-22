/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Box from '../components/Box';
import Deck from '../components/Deck';
import colors from '../constants/Colors';
import { handleGetDecks } from '../store/actions/decks';


class HomeScreen extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleGetDecks());
  }

  renderEmptyDecks = () => (
    <TouchableOpacity onPress={() => { }}>
      <Box>
        <Text style={styles.title}>
          👋 If you do not have an account yet, register now!
        </Text>
      </Box>
    </TouchableOpacity>
  );

  renderDecks = () => {
    const { decks, navigation } = this.props;
    const keys = Object.keys(decks).reverse();

    return (
      keys.map(key => (
        <TouchableOpacity onPress={() => navigation.navigate('DeckScreen', { deckId: key })} key={key}>
          <Box>
            <Deck id={key} />
          </Box>
        </TouchableOpacity>
      ))
    );
  }


  render() {
    const { decks } = this.props;

    return (
      <ScrollView style={styles.container}>
        {decks === null
          ? this.renderEmptyDecks()
          : this.renderDecks(decks)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

HomeScreen.defaultProps = {
  decks: null,
};

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  decks: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = ({ decks }) => ({
  decks,
});

export default connect(mapStateToProps)(HomeScreen);
