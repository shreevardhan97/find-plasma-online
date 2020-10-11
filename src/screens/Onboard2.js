import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Next1 from "../components/Next1";

function Onboard2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.helpSaveLives4}>
        find compatible donors and {"\n"}get instant help from the nearest hero
      </Text>
      <View style={styles.group1}>
        <View style={styles.group3}>
          <View style={styles.sendStack}>
            <Text style={styles.send}>send</Text>
            <Text style={styles.request}>request</Text>
          </View>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.alreadyAMemberRow}>
          <Text style={styles.alreadyAMember}>already a member?</Text>
          <Text style={styles.logIn}>Log in</Text>
        </View>
      </View>
      <Next1 style={styles.login1_button}></Next1>
      <Image
        source={require("../assets/images/individual.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
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
    marginTop: 446,
    marginLeft: 25
  },
  group1: {
    width: 183,
    height: 40,
    marginTop: -78,
    marginLeft: 88
  },
  group3: {
    width: 206,
    height: 40,
    alignSelf: "center"
  },
  send: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 83,
    fontSize: 36
  },
  request: {
    top: 0,
    left: 63,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(21,0,53,1)",
    height: 40,
    width: 127,
    fontSize: 36
  },
  sendStack: {
    width: 205,
    height: 40,
    marginLeft: 50
  },
  group2: {
    width: 161,
    height: 17,
    flexDirection: "row",
    marginTop: 130,
    marginLeft: 120
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
  login1_button: {
    height: 48,
    width: 206,
    marginTop: -72,
    marginLeft: 100
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -372,
    marginLeft: 120
  }
});

export default Onboard2;
