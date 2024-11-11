import 'react-native-gesture-handler'
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AppStack from './src/Navigation/AppStack';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <View style={{flex:1}}>
      <NavigationContainer>
       <AppStack/>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
