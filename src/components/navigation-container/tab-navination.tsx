/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen} />
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Tab.Screen name="Hello" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function SettingsStackScreen() {
  return (
    <View>
      <Text>Hello Seeting</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <View>
      <Text>Hello Home</Text>
    </View>
  );
}

export default App;
