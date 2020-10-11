import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRadio(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.selected ? "radiobox-marked" : "checkbox-marked"}
        style={styles.radioIcon}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ",1,0.86,1)"
  },
  radioIcon: {
    color: "rgba(186,224,189,1)",
    fontSize: 23,
    lineHeight: 24,
    transform: [
      {
        rotate: "1.00deg"
      }
    ]
  }
});

export default MaterialRadio;
