import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import LoginFInal from "../components/LoginFInal";

function Onboard4(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.helpSaveLives5}>HELP SAVE LIVES</Text>
      <View style={styles.group3}>
        <View style={styles.findStack}>
          <Text style={styles.find}>find</Text>
          <Text style={styles.plasma}>plasma</Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/Group_22.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.materialButtonPrimaryStack}>
        <LoginFInal style={styles.materialButtonPrimary}></LoginFInal>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Mainscreen")}
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
  helpSaveLives5: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 35,
    width: 360,
    textAlign: "center",
    marginTop: 445
  },
  group3: {
    width: 183,
    height: 40,
    marginTop: -81,
    alignSelf: "center"
  },
  find: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 124,
    fontSize: 36
  },
  plasma: {
    top: 0,
    left: 64,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(21,0,53,1)",
    height: 40,
    width: 130,
    fontSize: 36
  },
  findStack: {
    width: 194,
    height: 40,
    marginLeft: -7
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -264,
    marginLeft: 80
  },
  materialButtonPrimary: {
    height: 48,
    width: 206,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 100
  },
  button: {
    top: 0,
    left: 0,
    width: 206,
    height: 48,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonPrimaryStack: {
    width: 206,
    height: 48,
    marginTop: 142,
    marginLeft: 77
  }
});

export default Onboard4;
