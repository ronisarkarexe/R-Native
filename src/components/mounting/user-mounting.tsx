/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const User = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn('Hello', count);
  }, []);

  return (
    <View>
      <Text style={{fontSize: 22}}>Count: {count}</Text>
      <Text style={{fontSize: 22}}>Data: {data}</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me" />
      <Button onPress={() => setData(data + 1)} title="Click me" />
      <Student count={count} data={data} />
    </View>
  );
};

const Student = (props: any) => {
  const {count, data} = props;

  useEffect(() => {
    console.warn('child Hello', data);
  }, [data]);

  return (
    <View>
      <Text>Child Count: {count}</Text>
      <Text>Child Data: {data}</Text>
    </View>
  );
};

export default User;
