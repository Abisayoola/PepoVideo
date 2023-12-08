import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();

  const onArrowPressed = () => {
    navigation.navigate("Signin");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am a </Text>
      <Pressable
        style={[{ backgroundColor: "darkgrey", borderRadius: 5 }]}
        onPress={onArrowPressed}>
        <AntDesign name="arrowright" size={24} color="grey" />
      </Pressable>
    </View>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    marginVertical: 15,
    marginHorizontal: 20,
    lineHeight: 20,
    fontSize: 16,
  },
});
