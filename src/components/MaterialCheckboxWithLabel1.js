import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-marked"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.label}>
        {props.label || "I confirm that the entered information is accurate"}
      </Text>
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
    padding: 31
  },
  label: {
    marginLeft: 2,
    fontSize: 12,
    color: "rgba(255,255,255,0.87)"
  }
});

export default MaterialCheckboxWithLabel1;
