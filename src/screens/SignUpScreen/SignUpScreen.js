import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import logoblack from "../../../assets/images/logoblack.jpg";
import CheckBox from "expo-checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const onAgreePressed = () => {
    navigation.navigate("ConfirmEmail");
  };
  const onTermsofUsePressed = () => {
    console.warn("Terms");
  };
  const onPrivacyPressed = () => {
    console.warn("privacy");
  };
  const onCancelPressed = () => {
    navigation.navigate("Signin");
  };
  const onAcceptPressed = () => {
    console.warn("Accept All");
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onCancelPressed}
        style={[{ alignSelf: "flex-start", paddingHorizontal: 10 }]}>
        <MaterialCommunityIcons
          name="alpha-x-box-outline"
          size={40}
          color={"white"}
        />
      </Pressable>
      <Image source={logoblack} style={styles.logoblack} />
      <View
        style={[{ backgroundColor: "#222222", padding: 20, borderRadius: 20 }]}>
        <Text style={[{ fontWeight: "bold", color: "white", fontSize: 18 }]}>
          To continue using PEPO, please agree to the following;
        </Text>
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}>
          <CheckBox
            style={styles.checkbox}
            e
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.text}>
            I accept the {""}
            <Text style={styles.text} onPress={onTermsofUsePressed}>
              Terms of Service
            </Text>
          </Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}>
          <CheckBox
            style={styles.checkbox}
            e
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.text}>
            I have read the {""}
            <Text style={styles.text} onPress={onPrivacyPressed}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}>
          <CheckBox
            style={styles.checkbox}
            e
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.text}>
            I accept the {""}
            <Text style={styles.text} onPress={onTermsofUsePressed}>
              Cookie Policy
            </Text>
          </Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}>
          <CheckBox
            style={styles.checkbox}
            e
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.text}>
            I consent to being contacted by Company about latest news and
            special offers by email and push notification
          </Text>
        </View>
        <View
          style={[
            { backgroundColor: "#444444", borderRadius: 10, width: 300 },
          ]}>
          <CustomButton
            text="Accept All"
            onPress={onAcceptPressed}
            bgColor="#444444"
          />
        </View>
      </View>

      <View style={[{ width: "80%" }]}></View>
      <View style={[{ width: "100%", marginVertical: 10 }]}>
        <CustomButton text="Agree" onPress={onAgreePressed} bgColor="#444444" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginVertical: 15,
    marginHorizontal: 20,
    lineHeight: 20,
    fontSize: 16,
  },

  logoblack: {
    width: 200,
    height: 100,
    alignSelf: "flex-start",
    marginTop: 50,
  },
  checkbox: {
    margin: 5,
  },
});

export default SignUpScreen;
