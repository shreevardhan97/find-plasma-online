import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NameFah from "../components/NameFah";
import BloodGroupFah from "../components/BloodGroupFah";
import PhoneFah from "../components/PhoneFah";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import SubmitFah from "../components/SubmitFah";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";

function FindAHero(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3}>
        <Text style={styles.text}>find a hero</Text>
      </View>
      <NameFah style={styles.materialUnderlineTextbox}></NameFah>
      <BloodGroupFah style={styles.materialUnderlineTextbox1}></BloodGroupFah>
      <PhoneFah style={styles.materialUnderlineTextbox}></PhoneFah>
      <MaterialCheckboxWithLabel
        style={styles.materialCheckboxWithLabel}
      ></MaterialCheckboxWithLabel>
      <Image
        source={require("../assets/images/fah1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <SubmitFah style={styles.materialButtonViolet2}></SubmitFah>
      <MaterialUnderlineTextbox2
        style={styles.materialUnderlineTextbox2}
      ></MaterialUnderlineTextbox2>
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
    marginTop: 75,
    marginLeft: 25
  },
  text: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 308,
    fontSize: 36,
    marginLeft: 9
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 311,
    borderRadius: 10,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 7,
    marginLeft: 25
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 311,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 6,
    marginLeft: 25
  },
  materialCheckboxWithLabel: {
    height: 40,
    width: 75,
    marginTop: 63,
    marginLeft: 220
  },
  image: {
    width: 274,
    height: 293,
    marginTop: 57,
    marginLeft: 116
  },
  materialButtonViolet2: {
    height: 32,
    width: 110,
    marginTop: -342,
    marginLeft: 35
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 311,
    borderRadius: 10,
    marginTop: -137,
    marginLeft: 25
  }
});

export default FindAHero;
