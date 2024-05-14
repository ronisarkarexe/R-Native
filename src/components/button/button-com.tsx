/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const ButtonComponent = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 8,
    borderRadius: 8,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
    color: '#fff',
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'gray',
  },
  warning: {
    backgroundColor: 'gold',
  },
});

export default ButtonComponent;
