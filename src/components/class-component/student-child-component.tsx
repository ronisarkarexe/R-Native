/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

class StudentChildComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <Text>Hello student child: {this.props.title}</Text>
      </View>
    );
  }
}
export default StudentChildComponent;
