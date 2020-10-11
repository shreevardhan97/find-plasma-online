import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-marked"}
        style={styles.checkIcon}
      ></Icon>
      <TextInput
        placeholder="I confirm that the entered information is accurate."
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput}
      ></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  checkIcon: {
    color: "rgba(186,224,189,1)",
    fontSize: 28,
    lineHeight: 28,
    padding: 15
  },
  textInput: {
    marginLeft: 2,
    fontSize: 12,
    color: "rgba(255,255,255,0.87)",
    width: 422,
    height: 31,
    fontFamily: "roboto-regular",
    left: -10,
    top: 6,
    padding: 0
  }
});

export default MaterialCheckboxWithLabel;
