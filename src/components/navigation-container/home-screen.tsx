/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = props => {
  console.warn(props.route);

  const {name, age} = props.route?.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen: {name}</Text>
      <Text>Home Age: {age}</Text>
      <Button
        title="Go to Login Page"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
