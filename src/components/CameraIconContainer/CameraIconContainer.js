import { StyleSheet, Text, View, Pressable } from "react-native";

import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CameraIconContainer = () => {
  const onProfilePressed = () => {
    console.warn("Profile");
  };
  const onRotateCamera = () => {
    console.warn("rotatecamera");
  };
  const onFilter = () => {
    console.warn("filter");
  };
  const onCameraOff = () => {
    console.warn("cameraOff");
  };
  const onSearch = () => {
    console.warn("search");
  };
  const onPlus = () => {
    console.warn("explore");
  };

  return (
    <View>
      <View style={styles.cameraIcons}>
        <Pressable onPress={onProfilePressed} style={[{ paddingBottom: 10 }]}>
          <FontAwesome5 name="user-circle" size={40} color={"white"} />
        </Pressable>

        <Pressable onPress={onRotateCamera} style={[{ padding: 3 }]}>
          <MaterialIcons name="sync" size={30} color={"white"} />
        </Pressable>

        <Pressable onPress={onFilter} style={[{ padding: 3 }]}>
          <FontAwesome5 name="magic" size={25} color={"white"} />
        </Pressable>
        <Pressable onPress={onCameraOff} style={[{ padding: 3 }]}>
          <Ionicons name="camera-outline" size={30} color={"white"} />
        </Pressable>

        <Pressable onPress={onSearch} style={[{ padding: 3 }]}>
          <FontAwesome5 name="search" size={30} color={"white"} />
        </Pressable>

        <Pressable onPress={onPlus} style={[{ padding: 5 }]}>
          <MaterialCommunityIcons
            name="plus-circle"
            size={30}
            color={"white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraIconContainer;

const styles = StyleSheet.create({
  cameraIcons: {
    alignSelf: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: 10,
    paddingTop: 40,
  },
});
