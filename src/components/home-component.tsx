/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeComponent = (): React.JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 40}}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button
        title="Decrease"
        color={'green'}
        onPress={() => setCount(count - 1)}
      />

      <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <TextInput placeholder="Enter your name" />
    </View>
  );
};

export default HomeComponent;
