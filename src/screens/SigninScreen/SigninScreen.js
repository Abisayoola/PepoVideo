import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";

import { useNavigation } from "@react-navigation/native";
import Zocial from "react-native-vector-icons/Zocial";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const SigninScreen = () => {
  const [phonenumber, setphonenumber] = useState("");

  const [password, setpassword] = useState("");

  const height = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user

    navigation.navigate("SignUp");
  };

  const onSignInFacbook = () => {
    console.warn("Facebook");
  };
  const onSignInGoogle = () => {
    console.warn("Google");
  };
  const onSignInApple = () => {
    console.warn("Apple");
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ResetPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView backgroundColor="#F0FEFF">
      <View style={styles.container}>
        <Image source={logo} style={[styles.logo]} />
        <View style={[{ width: "80%" }]}>
          <View style={[{ paddingBottom: 10 }]}>
            <MaterialIcons.Button
              name="smartphone"
              borderRadius={50}
              backgroundColor="black"
              onPress={onSignInPressed}>
              Use Phone Number
            </MaterialIcons.Button>
          </View>

          <View style={[{ paddingBottom: 10 }]}>
            <Zocial.Button
              name="facebook"
              borderRadius={50}
              backgroundColor="#1877F2"
              onPress={onSignInFacbook}>
              Connect with Facebook
            </Zocial.Button>
          </View>

          <View style={[{ paddingBottom: 10 }]}>
            <Ionicons.Button
              name="logo-google"
              borderRadius={50}
              color={"black"}
              backgroundColor="white"
              onPress={onSignInGoogle}>
              Connect with Google
            </Ionicons.Button>
          </View>

          <View style={[{ paddingBottom: 10 }]}>
            <Ionicons.Button
              name="logo-apple"
              borderRadius={50}
              color={"black"}
              backgroundColor="white"
              onPress={onSignInApple}>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0FEFF",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});

export default SigninScreen;
