/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const ModalCom = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType="fade">
        <View style={styles.currentBox}>
          <View style={styles.mobileView}>
            <Text>Hello code sty</Text>
            <Button title="Close Modal" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.btn}>
        <Button onPress={() => setShow(true)} title="Open Modal" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  currentBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileView: {
    backgroundColor: 'gray',
    padding: 50,
    borderRadius: 8,
  },
});

export default ModalCom;
