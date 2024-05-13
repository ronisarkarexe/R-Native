/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Student from './student-component';

class ClassComponentNative extends React.Component {
  count = () => {
    console.warn('Count++');
  }
  render(): React.ReactNode {
    return (
      <View>
        <Text style={{fontSize: 28, textAlign: 'center'}}>Class Component</Text>
        <TextInput placeholder="Enter Name" />
        <Button title={'Press me'} onPress={this.count}/>
        <Student/>
      </View>
    );
  }
}

export default ClassComponentNative;
