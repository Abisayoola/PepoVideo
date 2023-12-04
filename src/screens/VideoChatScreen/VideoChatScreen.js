import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import ReactionIconContainer from "../../components/ReactionIconContainer/ReactionIconContainer";
import ChatInputContainer from "../../components/ChatInputContainer";

const VideoChatScreen = () => {
  const [chat, setChat] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.CameraPreview}></View>
      <View style={[{ marginTop: "auto" }]}>
        <ChatInputContainer />
        <ReactionIconContainer />
      </View>
    </View>
  );
};

export default VideoChatScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0d6345",
  },
  CameraPreview: {
    width: 100,
    height: 150,
    borderRadius: 10,
    backgroundColor: "red",
    position: "absolute",
    right: 10,
    top: 100,
  },
});
