/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Todo = (): React.JSX.Element => {
  return (
    <View>
      <Text style={{fontSize: 22, textAlign: 'center', marginTop: 8}}>
        Todo List
      </Text>

      <TextInput style={styles.textInputBox} placeholder="Enter Your Name" />
      <TextInput style={styles.textInputBox} placeholder="Enter Your Email" />
      <TextInput
        style={styles.textInputBox}
        placeholder="Enter Your Password"
        secureTextEntry={true}
      />
      <Button title="Save" />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: 'red',
    fontSize: 18,
  },
  textInputBox: {
    fontSize: 22,
    color: 'blur',
    borderColor: 'blur',
    borderWidth: 2,
    margin: 7,
    borderRadius: 6,
  },
});

export default Todo;
