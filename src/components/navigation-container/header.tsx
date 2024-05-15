/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Header = props => {
  return (
    <View>
      <Button
        title="Header"
        onPress={() => props.navigation.navigate('Home')}
      />
      <TextInput style={{backgroundColor: 'white'}} placeholder="name" />
    </View>
  );
};

export default Header;
