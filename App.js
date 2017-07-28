import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import config from './config';

export default class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: config.FIREBASE_API_KEY,
      authDomain: "one-time-password-60645.firebaseapp.com",
      databaseURL: "https://one-time-password-60645.firebaseio.com",
      projectId: "one-time-password-60645",
      storageBucket: "one-time-password-60645.appspot.com",
      messagingSenderId: "1062606108743"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
