import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function NameFindahero(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.name}>Name</Text>
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
    paddingLeft: 16,
    borderRadius: 10
  },
  name: {
    fontFamily: "roboto-500",
    lineHeight: 16,
    color: "#000",
    opacity: 0.65,
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: 16,
    padding: 13
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
    paddingLeft: 30,
    textAlign: "left"
  }
});

export default NameFindahero;
