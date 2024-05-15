/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
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
          options={{title: 'User Login'}}
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

const HomeScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login Page"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

const LoginScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default App;
