import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import SigninScreen from './src/screens/SigninScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style={'auto'} />
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#F0FEFf",
  // },
});
