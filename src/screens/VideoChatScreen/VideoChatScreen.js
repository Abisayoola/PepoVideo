import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import ReactionIconContainer from "../../components/ReactionIconContainer/ReactionIconContainer";
import CustomInput from "../../components/CustomInput/CustomInput";
import { AntDesign } from "@expo/vector-icons";

const VideoChatScreen = () => {
  const [chat, setChat] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.CameraPreview}></View>
      <View style={[{ marginTop: "auto" }]}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}>
          <View
            style={{
              alignItems: "stretch",
              alignContent: "stretch",
              flex: 1,
            }}>
            <CustomInput placeholder="Start chat" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{
                backgroundColor: "#232323",
                marginHorizontal: 5,

                borderRadius: 100,
                padding: 10,
              }}>
              <AntDesign
                name="sync"
                size={16}
                color="black"
                style={{ paddingHorizontal: 5 }}
              />
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#232323",

                borderRadius: 100,
                padding: 10,
                marginHorizontal: 5,
              }}>
              <AntDesign
                name="sync"
                size={16}
                color="black"
                style={{ paddingHorizontal: 5 }}
              />
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#232323",

                borderRadius: 100,
                padding: 10,
                marginHorizontal: 5,
              }}>
              <AntDesign
                name="sync"
                size={16}
                color="black"
                style={{ paddingHorizontal: 5 }}
              />
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#232323",

                borderRadius: 100,
                padding: 10,
                marginHorizontal: 5,
              }}>
              <AntDesign
                name="sync"
                size={16}
                color="black"
                style={{ paddingHorizontal: 5 }}
              />
            </Pressable>
          </View>
        </View>
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
