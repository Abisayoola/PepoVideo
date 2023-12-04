import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, bgColor ? { backgroundColor: bgColor } : {}]}>
      <Text style={[styles.text, fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F989BA",
    width: "100%",

    padding: "3%",
    marginVertical: "1%",

    alignItems: "center",
    borderRadius: "60",
  },

  container_PRIMARY: {
    backgroundColor: "#F989BA",
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },
});
export default CustomButton;
