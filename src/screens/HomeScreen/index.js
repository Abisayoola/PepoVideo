import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import BottomIconContainer from "../../components/BotomIconContainer/BottomIconContainer";
import { useNavigation } from "@react-navigation/native";
import CameraIconContainer from "../../components/CameraIconContainer/CameraIconContainer";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CameraPreview}>
        <CameraIconContainer />
      </View>

      <BottomIconContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 10,
  },
  CameraPreview: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#56C6D2",
  },
});

export default HomeScreen;
