import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen, ScreenName} from '../Component/Screen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName={ScreenName.login}
        screenOptions={{
          gestureEnabled: false,
          cardStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name={ScreenName.login}
          component={Screen.loginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.otp}
          component={Screen.otpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.setting}
          component={Screen.settingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
