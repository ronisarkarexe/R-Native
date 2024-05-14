/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.redBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
  },
  greenBox: {
    flex: 2,
    backgroundColor: '#00FF00',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  redBox: {
    flex: 1,
    backgroundColor: '#FF0000',
    borderWidth: 1,
    borderColor: 'black',
  },
  blueBox: {
    flex: 1,
    backgroundColor: '#0000FF',
    borderWidth: 1,
    borderColor: 'black',
  },
  innerBox1: {
    flex: 1,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  innerBox2: {
    flex: 1,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  innerBox3: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
});

export default FlexComponent;
