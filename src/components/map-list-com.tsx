/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const MapListComponent = () => {
  const users = [
    {
      id: 1,
      name: 'Todo List 1',
    },
    {
      id: 2,
      name: 'Todo List 2',
    },
    {
      id: 3,
      name: 'Todo List 3',
    },
    {
      id: 4,
      name: 'Todo List 4',
    },
    {
      id: 5,
      name: 'Todo List 5',
    },
    {
      id: 6,
      name: 'Todo List 6',
    },
    {
      id: 7,
      name: 'Todo List 7',
    },
    {
      id: 8,
      name: 'Todo List 8',
    },
    {
      id: 9,
      name: 'Todo List 9',
    },
    {
      id: 10,
      name: 'Todo List 10',
    },
    {
      id: 11,
      name: 'Todo List 11',
    },
    {
      id: 12,
      name: 'Todo List 12',
    },
    {
      id: 13,
      name: 'Todo List 13',
    },
    {
      id: 14,
      name: 'Todo List 14',
    },
    {
      id: 15,
      name: 'Todo List 15',
    },
  ];

  return (
    <View>
      <Text>Map list</Text>
      <ScrollView style={{marginBottom: 280}}>
        {users.map((user, index) => (
          <Text key={index} style={styles.item}>
            {user.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: 'blur',
    borderColor: 'red',
    margin: 10,
    backgroundColor: 'gray',
  },
});

export default MapListComponent;
