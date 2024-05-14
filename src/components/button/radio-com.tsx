/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioComponent = () => {
  return <View style={styles.main}>
  <TouchableOpacity>
    <View>
      <Text style={styles.radioText}>Radio 1</Text>
    </View>
  </TouchableOpacity>
</View>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {},
});

export default RadioComponent;
