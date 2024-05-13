/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text, View} from 'react-native';

const FlatListComponent = () => {
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
      name: 'Todo List 4',
    },
  ];
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item?.name}</Text>}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};

export default FlatListComponent;
