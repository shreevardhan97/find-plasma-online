import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Getstarted from "../components/Getstarted";

function Onboard1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonViolet1Stack} onPress={() => this.props.navigation.navigate('Onboard2.js')}>
        <Getstarted style={styles.materialButtonViolet1}   
 ></Getstarted>
        <Getstarted style={styles.getStarted1_button} ></Getstarted>
      </View>
      <Text style={styles.helpSaveLives1}>HELP SAVE LIVES</Text>
      <View style={styles.group1}>
        <View style={styles.find1Stack}>
          <Text style={styles.find1}>find</Text>
          <Text style={styles.plasma1}>plasma</Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/logo1.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <View style={styles.group2}>
        <View style={styles.alreadyAMemberRow}>
          <Text style={styles.alreadyAMember}>already a member?</Text>
          <Text style={styles.logIn}>Log in</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(239,92,52,1)"
  },
  materialButtonViolet1: {
    height: 48,
    width: 207,
    position: "absolute",
    left: 0,
    top: 0
  },
  getStarted1_button: {
    height: 48,
    width: 207,
    
  },
  materialButtonViolet1Stack: {
    width: 207,
    height: 48,
    marginTop: 518,
    marginLeft: 100,
   
  },
  helpSaveLives1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 17,
    width: 360,
    textAlign: "center",
    marginTop: -121,
    marginLeft: 25
    
  },
  group1: {
    width: 183,
    height: 40,
    marginTop: -60,
    marginLeft: 88
  },
  find1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 69,
    fontSize: 36
  },
  plasma1: {
    top: 0,
    left: 39,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(21,0,53,1)",
    height: 40,
    width: 120,
    fontSize: 36,
    textAlign: "center"
  },
  find1Stack: {
    width: 184,
    height: 40,
    marginLeft: 50
  },
  image1: {
    width: 166,
    height: 166,
    marginTop: -243,
    marginLeft: 125
  },
  group2: {
    width: 161,
    height: 17,
    flexDirection: "row",
    marginTop: 208,
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
    flex: 1,
    marginLeft: 25
  }
});

export default Onboard1;
