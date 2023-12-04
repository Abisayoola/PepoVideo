import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { DateTimePicker } from "@react-native-community/datetimepicker";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [number, setNumber] = useState("");

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate("HomeScreen");
  };

  const onSignInPressed = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <View style={[{ padding: 10, alignSelf: "stretch" }]}>
        <Text style={styles.title}> Enter Phone Number</Text>
        <CustomInput
          placeholder="Enter Your Phone Number"
          value={number}
          setValue={setNumber}
        />
      </View>

      <CustomButton text="Confirm" onPress={onConfirmPressed} />

      <CustomButton
        text="Back to Sign In"
        onPress={onSignInPressed}
        bgColor="#F0FEFF"
        fgColor="grey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#111111",
    flex: 1,
  },
  text: {
    color: "grey",
    marginVertical: 20,
  },
  link: {
    color: "#dc0c54",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default ConfirmEmailScreen;
