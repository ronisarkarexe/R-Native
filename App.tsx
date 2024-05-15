/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, TextInput, View} from 'react-native';
import Header from './src/components/navigation-container/header';
import HomeScreen from './src/components/navigation-container/home-screen';
import LoginScreen from './src/components/navigation-container/login-screen';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const btnAction = () => {
    console.warn('action');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'User Login',
            headerTitle: () => <Button title="Left" onPress={btnAction} />,
            headerRight: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'User Home',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
