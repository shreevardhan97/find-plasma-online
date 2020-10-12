import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Next2 from "../components/Next2";

function Onboard3(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.helpSaveLives4}>
        share your info with nearby requesters{"\n"}and become a hero
      </Text>
      <View style={styles.group2}>
        <View style={styles.alreadyAMemberRow}>
          <Text style={styles.alreadyAMember}>already a member?</Text>
          <Text style={styles.logIn}>Log in</Text>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.provideStack}>
          <Text style={styles.provide}>provide</Text>
          <Text style={styles.help5}>help</Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/XMLID_8633.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <View style={styles.materialButtonPrimaryStack}>
        <Next2 style={styles.materialButtonPrimary}></Next2>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Onboard4")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(239,92,52,1)"
  },
  helpSaveLives4: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 34,
    width: 360,
    textAlign: "center",
    marginTop: 445
  },
  group2: {
    width: 161,
    height: 17,
    flexDirection: "row",
    marginTop: 89,
    marginLeft: 99
  },
  alreadyAMember: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 14,
    width: 123
  },
  logIn: {
    fontFamily: "roboto-700",
    color: "#121212"
  },
  alreadyAMemberRow: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group3: {
    width: 183,
    height: 40,
    marginTop: -183,
    marginLeft: 88
  },
  provide: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 124,
    fontSize: 36
  },
  help5: {
    top: 0,
    left: 123,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(21,0,53,1)",
    height: 40,
    width: 73,
    fontSize: 36
  },
  provideStack: {
    width: 196,
    height: 40,
    marginLeft: -4
  },
  image2: {
    width: 200,
    height: 200,
    marginTop: -272,
    marginLeft: 80
  },
  materialButtonPrimary: {
    height: 48,
    width: 206,
    position: "absolute",
    top: 0,
    borderRadius: 92,
    backgroundColor: "rgba(255,255,255,1)",
    left: 0
  },
  button: {
    top: 0,
    left: 0,
    width: 206,
    height: 51,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonPrimaryStack: {
    width: 206,
    height: 51,
    marginTop: 147,
    marginLeft: 77
  }
});

export default Onboard3;
