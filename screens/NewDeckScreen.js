import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Box from '../components/Box';
import Button from '../components/FlashCardButton';
import Colors from '../constants/Colors';
import { getPlatformOS } from '../utils/helpers';
import { handleAddDeck } from '../store/actions/decks';

class NewDeckScreen extends Component {
  state = {
    title: '',
  };

  changeTitle = title => this.setState({ title });

  submit = () => {
    const { title } = this.state;
    const { dispatch } = this.props;

    if (title !== '') {
      dispatch(handleAddDeck(title));
      this.setState({ title: '' });
      this.toDeckScreen();
    }
  };

  toDeckScreen = () => {
    const { navigation } = this.props;
    const { title } = this.state;

    navigation.navigate('DeckScreen', { deckId: title });
  }

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <Box>
          <Text style={styles.text}>What is the title of your new deck? 🤔</Text>
          <TextInput
            style={getPlatformOS() === 'ios' ? styles.titleInputIos : styles.titleInputAndroid}
            placeholder="Deck Title"
            onChangeText={this.changeTitle}
            value={title}
          />
          <TouchableOpacity onPress={this.submit}>
            <Button style={styles.submitBtn} backgroundColor={Colors.success}>
              <Text style={{ color: Colors.white }}>Submit</Text>
            </Button>
          </TouchableOpacity>
        </Box>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
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
  submitBtn: {
    marginTop: 8,
    alignSelf: 'center',
  }
});

NewDeckScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect()(NewDeckScreen);
