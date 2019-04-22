import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Box from '../components/Box';
import FlashMobileStatusBar from '../components/FlashMobileStatusBar';
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
        <Text style={styles.text}>
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
            <Text style={styles.text}>{decks[key].title}</Text>
          </Box>
        </TouchableOpacity>
      ))
    );
  }


  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        {decks === null
          ? this.renderEmptyDecks()
          : this.renderDecks(decks)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  text: {
    fontSize: 18,
    color: colors.black,
  }
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
