import React, { Component } from 'react';
import axios from 'axios';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-one-time-password-60645.cloudfunctions.net';
// local 'http://localhost:5002/one-time-password-60645/us-central1'

class SignInForm extends Component {
  state = { phone: '', error: '', code: '' };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
      firebase.auth().signInWithCustomToken(data.token);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button
          title="submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignInForm;
