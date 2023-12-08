import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";

import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Zocial, AntDesign } from "@expo/vector-icons";

const SigninScreen = () => {
  const height = useWindowDimensions();
  const navigation = useNavigation();

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
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#000",
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("SignUp")}>
            <MaterialCommunityIcons name="cellphone" size={24} color="#fff" />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#fff",
                }}>
                Use phone number
              </Text>
            </View>
            <View />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#1877F2",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("SignUp")}>
            <Zocial name="facebook" size={24} color="#fff" />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#fff",
                }}>
                Connect with Facebook
              </Text>
            </View>
            <View />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("SignUp")}>
            <AntDesign name="google" size={24} color="#000" />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#000",
                }}>
                Connect with Google
              </Text>
            </View>
            <View />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("SignUp")}>
            <AntDesign name="apple1" size={24} color="#000" />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#000",
                }}>
                Sign in with Apple
              </Text>
            </View>
            <View />
          </Pressable>
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
    margin: 1,
  },
});

export default SigninScreen;
