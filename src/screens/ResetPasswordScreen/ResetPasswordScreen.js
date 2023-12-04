import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onResetPressed = () => {
    navigation.navigate("NewPassword");
  };

  const onSignInPressed = () => {
    navigation.navigate("Signin");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Reset Your Password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Reset Password" onPress={onResetPressed} />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          bgColor="#F0FEFF"
          fgColor="grey"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "grey",
    marginVertical: 20,
  },
  link: {
    color: "#dc0c54",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
});

export default ResetPasswordScreen;
