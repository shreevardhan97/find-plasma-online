import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import SubmitBah from "../components/SubmitBah";
import NameBah from "../components/NameBah";
import BloodGroupBah from "../components/BloodGroupBah";
import PhoneBah from "../components/PhoneBah";
import LocationBah from "../components/LocationBah";
import LastdiagnosedBah from "../components/LastdiagnosedBah";
import MaterialCheckboxWithLabel1 from "../components/MaterialCheckboxWithLabel1";

function BecomeAHero(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3}>
        <Text style={styles.text}>become a hero</Text>
      </View>
      <View style={styles.materialButtonViolet2StackRow}>
        <View style={styles.materialButtonViolet2Stack}>
          <SubmitBah style={styles.materialButtonViolet2}></SubmitBah>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Mainscreen")}
            style={styles.button}
          ></TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/bah.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.group4}>
        <NameBah style={styles.materialUnderlineTextbox2}></NameBah>
        <BloodGroupBah style={styles.materialUnderlineTextbox3}></BloodGroupBah>
        <PhoneBah style={styles.materialUnderlineTextbox4}></PhoneBah>
        <LocationBah style={styles.materialUnderlineTextbox2}></LocationBah>
        <LastdiagnosedBah
          style={styles.materialUnderlineTextbox2}
        ></LastdiagnosedBah>
        <MaterialCheckboxWithLabel1
          style={styles.materialCheckboxWithLabel1}
        ></MaterialCheckboxWithLabel1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(239,92,52,1)"
  },
  group3: {
    width: 183,
    height: 40,
    justifyContent: "center",
    marginTop: 78,
    marginLeft: 21
  },
  text: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 308,
    fontSize: 36,
    marginLeft: 9
  },
  materialButtonViolet2: {
    height: 32,
    width: 110,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 100
  },
  button: {
    top: 0,
    left: 0,
    width: 110,
    height: 32,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonViolet2Stack: {
    width: 110,
    height: 32
  },
  image: {
    width: 223,
    height: 282,
    marginLeft: 11,
    marginTop: 20
  },
  materialButtonViolet2StackRow: {
    height: 302,
    flexDirection: "row",
    marginTop: 320,
    marginLeft: 36,
    marginRight: -20
  },
  group4: {
    width: 311,
    height: 288,
    marginTop: -598,
    marginLeft: 22
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 310,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 7
  },
  materialUnderlineTextbox3: {
    height: 43,
    width: 310,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 6
  },
  materialUnderlineTextbox4: {
    height: 43,
    width: 311,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    marginTop: 6
  },
  materialCheckboxWithLabel1: {
    height: 40,
    width: 289,
    marginTop: 6
  }
});

export default BecomeAHero;
