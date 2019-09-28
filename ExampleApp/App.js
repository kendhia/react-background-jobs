import React, {Component} from 'react';

import RNBackgroundJobs from 'react-native-background-jobs';

import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default class App extends Component {
  logSomething = () => {
    RNBackgroundJobs.startBackgroundJob();
  };

  componentDidMount() {
    this.logSomething();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Teeeeest</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  body: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15%',
  },
});
