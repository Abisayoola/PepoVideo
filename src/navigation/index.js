import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ConnectingScreen from '../screens/ConnectingScreen';
import VideoChatScreen from '../screens/VideoChatScreen';

import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={24} color="#fff" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailScreen}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
        />
        <Stack.Screen
          name="ConnectingScreen"
          component={ConnectingScreen}
        />
        <Stack.Screen
          name="VideoChatScreen"
          component={VideoChatScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
