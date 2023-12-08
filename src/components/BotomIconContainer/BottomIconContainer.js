import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const BottomIconContainer = () => {
  const navigation = useNavigation();

  const onChatPressed = () => {
    navigation.navigate("DmScreen");
  };

  const onHomePressed = () => {
    console.warn("Home");
  };
  const onLoading = () => {
    navigation.navigate("LoadingScreen");
  };

  return (
    <View>
      <View style={styles.iconsContainer}>
        <Pressable onPress={onChatPressed}>
          <MaterialIcons name="chat-bubble" size={40} color={"white"} />
        </Pressable>

        <Pressable onPress={onHomePressed}>
          <MaterialCommunityIcons
            name="radiobox-blank"
            size={40}
            color={"white"}
          />
        </Pressable>

        <Pressable onPress={onLoading}>
          <MaterialCommunityIcons
            name="account-box-multiple"
            size={40}
            color={"white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomIconContainer;

const styles = StyleSheet.create({
  iconsContainer: {
    backgroundColor: "black",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
