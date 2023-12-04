import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ConnectingScreen = () => {
  const onGenderPressed = () => {
    console.warn("gender");
  };
  const onCountryPressed = () => {
    console.warn("country");
  };
  const onDiamondPressed = () => {
    console.warn("diamond");
  };

  return (
    <View style={styles.container}>
      <View style={styles.CameraPreview}>
        <Text style={[{ paddingBottom: 20, color: "white", fontSize: 16 }]}>
          {" "}
          Connecting...
        </Text>
        <View
          style={[
            {
              backgroundColor: "#A6958C",
              width: "80%",
              height: 500,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "lightgreen",
              padding: 10,
            },
          ]}>
          <Text style={[{ color: "white", fontSize: 20 }]}> Khan baba</Text>
          <Text style={[{ color: "white", fontSize: 16 }]}>
            {" "}
            Sheffield, United Kingdom
          </Text>
          <Text style={[{ color: "white", fontSize: 16 }]}> English</Text>
          <Text style={[{ color: "white", fontSize: 16 }]}> #stayathome</Text>
        </View>
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

export default ConnectingScreen;
