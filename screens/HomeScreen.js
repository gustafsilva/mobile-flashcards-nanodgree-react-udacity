import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { handleGetDecks } from '../store/actions/decks';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleGetDecks());
  }

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>
          {JSON.stringify(decks)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});

HomeScreen.defaultProps = {
  decks: {},
};

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  decks: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = ({ decks }) => ({
  decks,
});

export default connect(mapStateToProps)(HomeScreen);
