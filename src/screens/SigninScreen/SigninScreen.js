import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';

import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Zocial } from '@expo/vector-icons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SigninScreen = () => {
  const [phonenumber, setphonenumber] = useState('');

  const [password, setpassword] = useState('');

  const height = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user

    navigation.navigate('SignUp');
  };

  const onSignInFacbook = () => {
    console.warn('Facebook');
  };
  const onSignInGoogle = () => {
    console.warn('Google');
  };
  const onSignInApple = () => {
    console.warn('Apple');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ResetPassword');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView backgroundColor="#F0FEFF">
      <View style={styles.container}>
        <Image source={logo} style={[styles.logo]} />
        <View style={[{ width: '80%' }]}>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#000',
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('SignUp')}
          >
            <MaterialCommunityIcons
              name="cellphone"
              size={24}
              color="#fff"
            />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                Use phone number
              </Text>
            </View>
            <View />
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#1877F2',
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: 'center',
            }}
          >
            <Zocial name="facebook" size={24} color="#fff" />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                Connect with Facebook
              </Text>
            </View>
            <View />
          </Pressable>

          <View style={[{ paddingBottom: 10 }]}>
            <Ionicons.Button
              name="logo-google"
              borderRadius={50}
              color={'black'}
              backgroundColor="white"
              onPress={onSignInGoogle}
            >
              Connect with Google
            </Ionicons.Button>
          </View>

          <View style={[{ paddingBottom: 10 }]}>
            <Ionicons.Button
              name="logo-apple"
              borderRadius={50}
              color={'black'}
              backgroundColor="white"
              onPress={onSignInApple}
            >
              Sign in with Apple
            </Ionicons.Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0FEFF',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default SigninScreen;
