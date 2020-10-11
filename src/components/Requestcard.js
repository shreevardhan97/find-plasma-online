import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Requestcard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rohitRow}>
        <Text style={styles.rohit}>{props.rohit || "Rohit"}</Text>
        <Text style={styles.b}>{props.b || "B+"}</Text>
        <View style={styles.rect}></View>
        <Image
          source={require("../assets/images/CALL.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "rgba(255,176,0,1)",
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
    overflow: "hidden",
    flexDirection: "row"
  },
  rohit: {
    fontFamily: "roboto-700",
    color: "rgba(255,176,0,1)",
    height: 22,
    width: 162,
    fontSize: 18
  },
  b: {
    fontFamily: "roboto-700",
    color: "rgba(239,92,52,1)",
    height: 20,
    width: 32,
    fontSize: 18,
    marginLeft: 32,
    marginTop: 1
  },
  rect: {
    width: 2,
    height: 20,
    backgroundColor: "rgba(255,176,0,1)",
    marginLeft: 15,
    marginTop: 2
  },
  image: {
    width: 18,
    height: 18,
    marginLeft: 8,
    marginTop: 1
  },
  rohitRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 9,
    marginTop: 9
  }
});

export default Requestcard;
