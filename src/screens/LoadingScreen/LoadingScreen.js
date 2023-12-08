import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConnectingScreen = () => {
  const navigation = useNavigation();
  const onGenderPressed = () => {
    console.warn("gender");
  };
  const onCountryPressed = () => {
    console.warn("country");
  };

  return (
    <View style={styles.container}>
      <View style={styles.CameraPreview}>
        <Text style={[{ paddingBottom: 20, color: "white", fontSize: 16 }]}>
          {" "}
          New Match Coming Up...
        </Text>
        <View
          style={[
            {
              backgroundColor: "#fff",
              width: "80%",
              height: 450,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            },
          ]}>
          <Text
            style={{
              fontSize: 80,
            }}>
            {" "}
            AD{" "}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.iconsContainer}>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#232323",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: "center",
            }}
            onPress={onGenderPressed}>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              <MaterialCommunityIcons
                name="human-female"
                size={24}
                color="pink"
              />
              <MaterialCommunityIcons
                name="human-male"
                size={24}
                color="#00CDD7"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,

                  color: "#fff",
                }}>
                Gender
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "#232323",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 32,
              marginBottom: 12,
              alignItems: "stretch",
            }}
            onPress={() => navigation.navigate("ConnectingScreen")}>
            <Entypo
              name="globe"
              size={24}
              color="#00CDD7"
              style={{ paddingHorizontal: 5 }}
            />

            <View>
              <Text
                style={{
                  fontSize: 16,

                  color: "#fff",
                }}>
                Country
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CDD7",
  },
  CameraPreview: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00CDD7",
    padding: 10,
    justifyContent: "center",
  },
  iconsContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#000",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ConnectingScreen;
