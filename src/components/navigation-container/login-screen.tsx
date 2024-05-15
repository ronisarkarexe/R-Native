/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';

const LoginScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default LoginScreen;
