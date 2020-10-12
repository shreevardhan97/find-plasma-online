import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Heroescard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.body}></View>
      <Text style={styles.johnCena}>{props.johnCena || "John Cena"}</Text>
      <Text style={styles.saltlakeKolkata}>saltlake, kolkata</Text>
      <Text style={styles.b4}>B+</Text>
      <View style={styles.rect}></View>
      <Image
        source={require("../assets/images/CALL1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.rect1}></View>
      <Text style={styles.b3}>20 days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgba(239,92,52,1)",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  body: {
    padding: 16
  },
  johnCena: {
    top: 18,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(239,92,52,1)",
    height: 45,
    width: 132,
    fontSize: 18
  },
  saltlakeKolkata: {
    top: 88,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(21,0,53,1)",
    height: 9,
    width: 106,
    fontSize: 10
  },
  b4: {
    top: 110,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(239,92,52,1)",
    height: 22,
    width: 21
  },
  rect: {
    top: 112,
    left: 36,
    width: 1,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(239,92,52,1)"
  },
  image: {
    top: 113,
    left: 42,
    width: 10,
    height: 10,
    position: "absolute"
  },
  rect1: {
    top: 112,
    left: 57,
    width: 1,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(239,92,52,1)"
  },
  b3: {
    top: 112,
    left: 62,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(239,92,52,1)",
    height: 22,
    width: 58,
    fontSize: 10
  }
});

export default Heroescard;
