import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LoadingScreen = () => {
  const navigation = useNavigation();
  const onGenderPressed = () => {
    console.warn("gender");
  };
  const onCountryPressed = () => {
    navigation.navigate("ConnectingScreen");
  };
  const onDiamondPressed = () => {
    console.warn("diamond");
  };

  return (
    <View style={styles.container}>
      <View style={styles.CameraPreview}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: 55,
          }}>
          We've activated our AI-driven safe mode to ensure you have a pleasant
          match! Your next match is being set up...
        </Text>
        <MaterialIcons name="emoji-emotions" size={100} color={"#FE8665"} />
      </View>
      <View>
        <View style={styles.iconsContainer}>
          <View style={[{ marginRight: 10 }]}>
            <CustomButton
              text="Gender"
              onPress={onGenderPressed}
              bgColor="#F0FEFF"
              fgColor="black"
            />
          </View>
          <View style={[{}]}>
            <CustomButton
              text="Country"
              onPress={onCountryPressed}
              bgColor="#F0FEFF"
              fgColor="black"
            />
          </View>
          <View style={[{}]}>
            <CustomButton
              text="7"
              onPress={onCountryPressed}
              bgColor="#F0FEFF"
              fgColor="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d6345",
  },
  CameraPreview: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0d6345",
    padding: 10,
    justifyContent: "center",
  },
  iconsContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#F0FEFF",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LoadingScreen;
