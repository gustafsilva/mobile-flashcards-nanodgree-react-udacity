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
    const { decks } = this.props;

    return (
      Object.keys(decks).map(key => (
        <TouchableOpacity onPress={() => { }} key={key}>
          <Box>
            <Text style={[styles.title, styles.textCenter]}>
              {decks[key].title}
            </Text>
            <Text style={[styles.lenQuestions, styles.textCenter]}>
              {`${decks[key].questions.length} cards`}
            </Text>
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
  title: {
    fontSize: 19,
    color: colors.black,
  },
  lenQuestions: {
    color: colors.silver,
  },
  textCenter: {
    textAlign: 'center',
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
