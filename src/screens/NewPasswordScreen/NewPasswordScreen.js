import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("HomeScreen");
  };

  const onSignInPressed = () => {
    navigation.navigate("Signin");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Reset your password</Text>
        <CustomInput
          placeholder="Enter reset code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
