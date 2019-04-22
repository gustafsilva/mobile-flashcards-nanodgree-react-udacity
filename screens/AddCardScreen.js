import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Box from '../components/Box';
import Button from '../components/FlashCardButton';
import TextInput from '../components/FlashCardTextInput';
import Colors from '../constants/Colors';
import { getPlatformOS } from '../utils/helpers';
import { handleAddCardToDeck } from '../store/actions/decks';

class AddCardScreeen extends Component {
  state = {
    question: '',
    answer: '',
  };

  changeQuestion = question => this.setState({ question });

  changeAnswer = answer => this.setState({ answer });

  submit = () => {
    const { navigation, dispatch } = this.props;
    const card = this.state;
    const { deckId } = navigation.state.params;

    if (card.question !== '' && card.answer !== '') {
      dispatch(handleAddCardToDeck(deckId, card));

      this.setState({
        question: '',
        answer: '',
      });

      navigation.goBack();
    }
  };


  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <Box>
          <Text style={styles.text}>🤓 Create a new Card, add a question and answer and click submit.</Text>
          <TextInput
            style={getPlatformOS() === 'ios' ? styles.titleInputIos : styles.titleInputAndroid}
            placeholder="Question"
            onChangeText={this.changeQuestion}
            value={question}
          />
          <TextInput
            style={getPlatformOS() === 'ios' ? styles.titleInputIos : styles.titleInputAndroid}
            placeholder="Answer"
            onChangeText={this.changeAnswer}
            value={answer}
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
  submitBtn: {
    marginTop: 8,
    alignSelf: 'center',
  }
});

AddCardScreeen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddCardScreeen);
