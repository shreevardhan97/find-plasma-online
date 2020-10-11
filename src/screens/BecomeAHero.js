import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SubmitBah from "../components/SubmitBah";
import NameBah from "../components/NameBah";
import BloodGroupBah from "../components/BloodGroupBah";
import PhoneBah from "../components/PhoneBah";
import LastdiagnosedBah from "../components/LastdiagnosedBah";
import MaterialCheckboxWithLabel1 from "../components/MaterialCheckboxWithLabel1";
import LocationBah from "../components/LocationBah";

function BecomeAHero(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3}>
        <Text style={styles.text}>become a hero</Text>
      </View>
      <View style={styles.materialButtonViolet2Row}>
        <SubmitBah style={styles.materialButtonViolet2}></SubmitBah>
        <Image
          source={require("../assets/images/bah.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <NameBah style={styles.materialUnderlineTextbox2}></NameBah>
      <BloodGroupBah style={styles.materialUnderlineTextbox3}></BloodGroupBah>
      <PhoneBah style={styles.materialUnderlineTextbox4}></PhoneBah>
      <LastdiagnosedBah
        style={styles.materialUnderlineTextbox2}
      ></LastdiagnosedBah>
      <MaterialCheckboxWithLabel1
        style={styles.materialCheckboxWithLabel1}
      ></MaterialCheckboxWithLabel1>
      <LocationBah style={styles.materialUnderlineTextbox2}></LocationBah>
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
    borderRadius: 100
  },
  image: {
    width: 223,
    height: 282,
    marginLeft: 11,
    marginTop: 20
  },
  materialButtonViolet2Row: {
    height: 302,
    flexDirection: "row",
    marginTop: 300,
    marginLeft: 36,
    marginRight: -20
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 310,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    marginTop: -600,
    marginLeft: 22
  },
  materialUnderlineTextbox3: {
    height: 43,
    width: 310,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 6,
    marginLeft: 22
  },
  materialUnderlineTextbox4: {
    height: 43,
    width: 310,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    marginTop: 6,
    marginLeft: 22
  },
  materialCheckboxWithLabel1: {
    height: 40,
    width: 289,
    marginTop: 575,
    marginLeft: 5
  }
});

export default BecomeAHero;
