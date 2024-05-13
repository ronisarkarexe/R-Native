/* eslint-disable prettier/prettier */
import React from 'react';
import {SectionList, Text, View} from 'react-native';

const SectionListComponent = () => {
  const users = [
    {
      id: 1,
      name: 'Text 1',
      data: ['C', 'C++', 'Java'],
    },
    {
      id: 2,
      name: 'Text 2',
      data: ['Html', 'Native', 'Java'],
    },
    {
      id: 3,
      name: 'Text 3',
      data: ['C#', 'Node', 'Native'],
    },
    {
      id: 4,
      name: 'Text 4',
      data: ['Swif', 'Python', 'Typescript'],
    },
    {
      id: 5,
      name: 'Text 5',
      data: ['Javascript', 'C#', 'Java'],
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 22}}>Section List</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={{fontSize: 20, marginLeft: 18}}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => <Text style={{color: 'red', fontSize: 28}}>{name}</Text>}
      />
    </View>
  );
};

export default SectionListComponent;
