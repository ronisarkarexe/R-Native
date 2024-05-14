/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View>
      <Button title="Toggle Component" onPress={() => setToggle(!toggle)} />
      {toggle ? <ViewComp /> : null}
    </View>
  );
};

const ViewComp = () => {
  const v = setInterval(() => {
    console.warn('time changes');
  }, 300);

  useEffect(() => {
    return () => {
      clearInterval(v);
    };
  }, []);

  return (
    <View>
      <Text style={{color: 'red'}}>Child component after toggle</Text>
    </View>
  );
};

export default ToggleComponent;
