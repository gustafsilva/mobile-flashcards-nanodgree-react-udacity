import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Box from '../components/Box';
import Colors from '../constants/Colors';
import FlashCardButton from '../components/FlashCardButton';
import { formatQuizResponse } from '../utils/helpers';

class QuizScreen extends Component {
  state = {
    currentQuestion: 0,
    score: 0,
    showAnswer: false,
  }

  reset = () => this.setState({
    currentQuestion: 0,
    score: 0,
    showAnswer: false,
  });

  renderEndQuiz = () => {
    const { score } = this.state;
    const { questions, navigation } = this.props;

    const response = formatQuizResponse(score, questions.length);
    const performace = (score / questions.length) * 100;

    return (
      <View style={styles.container}>
        <Box>
          <Text style={styles.performaceFeedback}>{`${performace}%`}</Text>
          <Text style={styles.responseFeedback}>{response}</Text>
          <TouchableOpacity onPress={this.reset}>
            <Text style={styles.goToDeckScreenBtn}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.goToDeckScreenBtn}>Back to Deck</Text>
          </TouchableOpacity>
        </Box>
      </View>
    );
  }

  toggleShowAnswer = () => this.setState(state => ({
    showAnswer: !state.showAnswer,
  }));

  handleCorrectQuiz = () => this.setState(state => ({
    score: state.score + 1,
    currentQuestion: state.currentQuestion + 1,
    showAnswer: false,
  }));

  handleIncorrectQuiz = () => this.setState(state => ({
    currentQuestion: state.currentQuestion + 1,
    showAnswer: false,
  }));

  render() {
    const { currentQuestion, showAnswer } = this.state;
    const { questions } = this.props;

    if (currentQuestion === questions.length) {
      return this.renderEndQuiz();
    }

    const quiz = questions[currentQuestion];
    const text = showAnswer === false ? quiz.question : quiz.answer;

    return (
      <View style={styles.container}>
        <Text style={styles.quizInfo}>{`${currentQuestion + 1}/${questions.length}`}</Text>

        <Box>
          <Text style={styles.quizText}>{text}</Text>

          <TouchableOpacity onPress={() => this.toggleShowAnswer()}>
            <Text style={styles.showAnswerBtn}>{showAnswer === false ? 'Show Answer' : 'Show Question'}</Text>
          </TouchableOpacity>
        </Box>

        <Box>
          <TouchableOpacity style={styles.submitAnswerBtn} onPress={this.handleCorrectQuiz}>
            <FlashCardButton backgroundColor={Colors.success}>
              <Text style={styles.submitAnswerText}>Correct</Text>
            </FlashCardButton>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitAnswerBtn} onPress={this.handleIncorrectQuiz}>
            <FlashCardButton style={styles.submitAnswerBtn} backgroundColor={Colors.danger}>
              <Text style={styles.submitAnswerText}>Incorrect</Text>
            </FlashCardButton>
          </TouchableOpacity>
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
  quizInfo: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    color: Colors.silver,
  },
  quizText: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.primary,
  },
  showAnswerBtn: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 17,
    color: Colors.danger,
  },
  submitAnswerBtn: {
    marginTop: 3,
  },
  submitAnswerText: {
    color: Colors.white,
  },
  performaceFeedback: {
    color: Colors.primary,
    fontSize: 45,
    textAlign: 'center',
  },
  responseFeedback: {
    color: Colors.black,
    fontSize: 25,
    textAlign: 'center',
  },
  goToDeckScreenBtn: {
    color: Colors.silver,
    textAlign: 'center',
    fontSize: 16,
  }
});

QuizScreen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ decks }, { navigation }) => ({
  questions: decks[navigation.state.params.deckId].questions,
});

export default connect(mapStateToProps)(QuizScreen);
