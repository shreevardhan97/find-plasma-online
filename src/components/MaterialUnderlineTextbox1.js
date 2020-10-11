import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Blood Group"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 10
  }
});

export default MaterialUnderlineTextbox1;
