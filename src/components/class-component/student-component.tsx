/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import StudentChildComponent from './student-child-component';

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Roni',
    };
  }

  updateName = val => {
    this.setState({
      name: val,
    });
  };

  render(): React.ReactNode {
    return (
      <View>
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          Student Component
        </Text>
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          {this.state.name}
        </Text>
        <Button title="Change Name" />
        <TextInput
          placeholder="Enter Name"
          onChangeText={text => this.updateName(text)}
        />
        <StudentChildComponent title={this.state.name} />
      </View>
    );
  }
}

export default Student;
