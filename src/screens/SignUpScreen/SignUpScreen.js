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
import { Ionicons, Entypo } from "@expo/vector-icons";

import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [accept, toggleAccept] = useState(false);

  const onAgreePressed = () => {
    navigation.navigate("HomeScreen");
  };
  const onTermsofUsePressed = () => {
    console.warn("Terms");
  };
  const onPrivacyPressed = () => {
    console.warn("privacy");
  };

  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={onCancelPressed}
        style={[{ alignSelf: 'flex-start', paddingHorizontal: 10 }]}
      >
        <AntDesign name="close" size={24} color="#fff" />
      </Pressable> */}
      <Image source={logoblack} style={styles.logoblack} />
      <View
        style={[
          {
            backgroundColor: "#222222",
            padding: 20,
            borderRadius: 20,
            marginHorizontal: 24,
          },
        ]}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 14,
            marginBottom: 14,
          }}>
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
        {/* <View
          style={[
            {
              backgroundColor: '#444444',
              borderRadius: 10,
              width: 300,
            },
          ]}
        >
          <CustomButton
            text="Accept All"
            onPress={onAcceptPressed}
            bgColor="#444444"
          />
        </View> */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#444444",
            marginTop: 30,
            paddingVertical: 18,
            paddingHorizontal: 14,
            borderRadius: 12,
          }}
          onPress={() => {
            setChecked(!isChecked);
            toggleAccept(!accept);
          }}>
          {accept ? (
            <Ionicons name="checkmark-circle-sharp" size={23} color="grey" />
          ) : (
            <Entypo name="circle" size={20} color="grey" />
          )}

          <Text style={{ color: "#fff", fontSize: 16, marginLeft: 14 }}>
            Accept all
          </Text>
        </Pressable>
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
    // padding: 25,
    backgroundColor: "black",
    flex: 1,
    // justifyContent: 'center',
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
