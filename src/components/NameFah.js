import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function NameFah(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Name"
        textBreakStrategy="simple"
        autoCapitalize="characters"
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
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    padding: 10
  }
});

export default NameFah;
