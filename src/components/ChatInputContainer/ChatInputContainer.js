import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ChatInputContainer = () => {
  return (
    <View style={styles.filterIcons}>
      <View
        style={[
          {
            backgroundColor: "grey",
            padding: 5,
            borderRadius: 30,
            width: 50,
            alignItems: "center",
          },
        ]}>
        <MaterialIcons name="chat-bubble" size={20} color={"white"} />
      </View>
      <View
        style={[
          {
            backgroundColor: "grey",
            padding: 5,
            borderRadius: 30,
            width: 50,
            alignItems: "center",
          },
        ]}>
        <MaterialIcons name="chat-bubble" size={20} color={"white"} />
      </View>
      <View
        style={[
          {
            backgroundColor: "grey",
            padding: 5,
            borderRadius: 30,
            width: 50,
            alignItems: "center",
          },
        ]}>
        <MaterialIcons name="chat-bubble" size={20} color={"white"} />
      </View>
      <View
        style={[
          {
            backgroundColor: "grey",
            padding: 5,
            borderRadius: 30,
            width: 50,
            alignItems: "center",
          },
        ]}>
        <MaterialIcons name="chat-bubble" size={20} color={"white"} />
      </View>
      <View
        style={[
          {
            backgroundColor: "grey",
            padding: 5,
            borderRadius: 30,
            width: 50,
            alignItems: "center",
          },
        ]}>
        <MaterialIcons name="chat-bubble" size={20} color={"white"} />
      </View>
      <View
        style={[
          {
            backgroundColor: "grey",
            padding: 5,
            borderRadius: 30,
            width: 50,
            alignItems: "center",
          },
        ]}>
        <MaterialIcons name="chat-bubble" size={20} color={"white"} />
      </View>
    </View>
  );
};

export default ChatInputContainer;

const styles = StyleSheet.create({
  filterIcons: {
    paddingVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});
