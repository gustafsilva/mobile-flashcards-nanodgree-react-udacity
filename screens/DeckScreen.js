import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';
import Deck from '../components/Deck';
import Box from '../components/Box';
import Button from '../components/FlashCardButton';


class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckId,
  });

  render() {
    const { navigation } = this.props;
    const { deckId } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Box>
          <Deck id={deckId} />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Button backgroundColor={Colors.success}>
                <Text style={styles.text}>Add Card</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Button backgroundColor={Colors.info}>
                <Text style={styles.text}>Start Quiz</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </Box>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  buttonsContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    marginTop: 3,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  }
});

DeckScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect()(DeckScreen);
