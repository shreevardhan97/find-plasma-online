import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.group}>
        <View style={styles.findStack}>
          <Text style={styles.find}>find</Text>
          <Text style={styles.plasma}>plasma</Text>
        </View>
      </View>
      <Text style={styles.helpSaveLives}>HELP SAVE LIVES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(239,92,52,1)"
  },
  image: {
    width: 166,
    height: 166,
    marginTop: 234,
    marginLeft: 97
  },
  group: {
    width: 183,
    height: 40,
    marginTop: 43,
    marginLeft: 88
  },
  find: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 69,
    fontSize: 36
  },
  plasma: {
    top: 0,
    left: 64,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(21,0,53,1)",
    height: 40,
    width: 120,
    fontSize: 36
  },
  findStack: {
    width: 184,
    height: 40
  },
  helpSaveLives: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 17,
    width: 360,
    textAlign: "center",
    marginTop: 6
  }
});

export default SplashScreen;
