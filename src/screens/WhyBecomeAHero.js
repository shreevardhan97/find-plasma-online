import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";

function WhyBecomeAHero(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3}>
        <Text style={styles.text}>why become a hero?</Text>
      </View>
      <Text style={styles.loremIpsum}>
        1. You can donate if you were diagnosed with COIVD-19 around 30-40 days
        ago and are fully recovered.{"\n"}
        {"\n"}2. You must be between 18 to 55 years old.{"\n"}
        {"\n"}3. You must not have undergone surgery/had a tattoo in the last 6
        months.{"\n"}
        {"\n"}4. You must not be diagnosed with HIV/cancer/TB.{"\n"}
        {"\n"}5. You must not be a kidney transplant recipient.
      </Text>
      <View style={styles.group4}>
        <Text style={styles.whyDonate}>why donate?</Text>
      </View>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>
          1. You can save countless lives of COVID-19 patients around you.{" "}
          {"\n"}
          {"\n"}2. There is no effect on the health of the donor as no blood
          cells are extracted. The donor can get fully active within an hour of
          donating.{"\n"}
          {"\n"}3. in this time of crysis, it is our moral duty to come together
          as a community and help each other in the smallest possible ways.
        </Text>
        <MaterialButtonViolet2
          style={styles.materialButtonViolet2}
        ></MaterialButtonViolet2>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("BecomeAHero")}
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
  group3: {
    width: 183,
    height: 40,
    justifyContent: "center",
    marginTop: 63,
    marginLeft: 34
  },
  text: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 308,
    fontSize: 36,
    marginLeft: 9
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 212,
    width: 270,
    fontSize: 14,
    marginTop: 57,
    marginLeft: 45
  },
  group4: {
    width: 175,
    height: 40,
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 34
  },
  whyDonate: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 308,
    fontSize: 36,
    marginLeft: 9
  },
  loremIpsum1: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 212,
    width: 270,
    fontSize: 14,
    left: 0
  },
  materialButtonViolet2: {
    height: 32,
    width: 110,
    position: "absolute",
    left: 0,
    top: 209,
    borderRadius: 100
  },
  button: {
    top: 209,
    left: 0,
    width: 110,
    height: 32,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  loremIpsum1Stack: {
    width: 270,
    height: 241,
    marginTop: 10,
    marginLeft: 45
  }
});

export default WhyBecomeAHero;
