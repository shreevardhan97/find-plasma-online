import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function BloodGroup1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.bloodGroup}>Blood Group</Text>
      <TextInput style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16
  },
  bloodGroup: {
    fontFamily: "roboto-500",
    fontSize: 18,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.66,
    alignSelf: "flex-start",
    left: 16,
    width: 77,
    top: -1,
    height: 40
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30
  }
});

export default BloodGroup1;
