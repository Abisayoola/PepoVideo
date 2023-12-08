import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import BottomIconContainer from "../../components/BotomIconContainer/BottomIconContainer";
import { useNavigation } from "@react-navigation/native";

const contacts = ["friend 1", "friend 2", "friend 3"];

const DmScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CameraPreview}></View>
      <Flatlist />
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

export default DmScreen;
