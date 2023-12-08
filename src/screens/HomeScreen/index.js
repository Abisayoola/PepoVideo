import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import BottomIconContainer from "../../components/BotomIconContainer/BottomIconContainer";
import { useNavigation } from "@react-navigation/native";
import CameraIconContainer from "../../components/CameraIconContainer/CameraIconContainer";
import { FontAwesome5 } from "@expo/vector-icons";
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CameraPreview}>
        <CameraIconContainer />
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",

            paddingHorizontal: 14,
            paddingVertical: 10,

            marginTop: "auto",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("LoadingScreen")}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "right",
                padding: 5,
              }}>
              Start {"\n"}Video Chat
            </Text>
          </View>
          <FontAwesome5 name="hand-pointer" size={24} color="black" />
        </Pressable>
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
