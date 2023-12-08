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
    console.warn("gender");
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
              backgroundColor: "#FF77BF",
              width: "80%",
              height: 450,
              borderRadius: 30,
              padding: 20,
              justifyContent: "space-between",
            },
          ]}>
          <View>
            <View
              style={{
                backgroundColor: "#000",
                borderRadius: 50,
                padding: 10,
                alignSelf: "flex-start",
                alignItems: "center",
                paddingHorizontal: 40,
              }}>
              <Text style={{ color: "#fff" }}>Username</Text>
            </View>
            <Text style={{ color: "#fff" }}>
              Location, Country {"\n"}Language{" "}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 40,
              }}>
              {" "}
              Profile Picture{" "}
            </Text>
          </View>

          <View
            style={{
              justifyContent: "flex-end",
              alignSelf: "center",
              marginBottom: 10,
            }}>
            <Text> A small BIO right here</Text>
          </View>
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
            onPress={() => navigation.navigate("VideoChatScreen")}>
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
