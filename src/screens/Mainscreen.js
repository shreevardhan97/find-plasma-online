import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Requestcard from "../components/Requestcard";
import Heroescard from "../components/Heroescard";

function Mainscreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.requestsStack}>
        <Text style={styles.requests}>requests</Text>
        <MaterialCommunityIconsIcon
          name="plus-box"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.heroesStack}>
        <Text style={styles.heroes}>heroes</Text>
        <MaterialCommunityIconsIcon
          name="plus-box"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.group}>
        <View style={styles.icon2Stack}>
          <EntypoIcon name="location-pin" style={styles.icon2}></EntypoIcon>
          <Text style={styles.saltlakeKolkata}>Saltlake, Kolkata</Text>
        </View>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Requestcard
            style={styles.materialCardWithImageAndTitle}
          ></Requestcard>
          <Requestcard
            b="A+"
            rohit="Shreevardhan"
            style={styles.materialCardWithImageAndTitle1}
          ></Requestcard>
          <Requestcard
            style={styles.materialCardWithImageAndTitle2}
          ></Requestcard>
        </ScrollView>
      </View>
      <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
          <View style={styles.materialCardBasicRow}>
            <Heroescard style={styles.materialCardBasic}></Heroescard>
            <Heroescard
              b4="B+"
              ryanGosling="Shreevardhan"
              b4="O"
              style={styles.materialCardBasic1}
            ></Heroescard>
            <Heroescard
              b4="B+"
              ryanGosling="Shreevardhan"
              b4="O"
              style={styles.materialCardBasic2}
            ></Heroescard>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  requests: {
    top: 1,
    left: -1,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(239,92,52,1)",
    height: 42,
    width: 171,
    fontSize: 36
  },
  icon: {
    top: 0,
    left: 148,
    position: "absolute",
    color: "rgba(239,92,52,1)",
    fontSize: 40
  },
  requestsStack: {
    width: 188,
    height: 43,
    marginTop: 122,
    marginLeft: 32
  },
  heroes: {
    top: 1,
    left: -1,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(239,92,52,1)",
    height: 42,
    width: 171,
    fontSize: 36
  },
  icon1: {
    top: 0,
    left: 116,
    position: "absolute",
    color: "rgba(239,92,52,1)",
    fontSize: 40
  },
  heroesStack: {
    width: 171,
    height: 43,
    marginTop: 217,
    marginLeft: 32
  },
  group: {
    width: 141,
    height: 44,
    marginTop: -386,
    marginLeft: 270
  },
  icon2: {
    top: 0,
    right: 10,
    position: "absolute",
    color: "rgba(21,0,53,1)",
    fontSize: 40
  },
  saltlakeKolkata: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 111
  },
  icon2Stack: {
    width: 141,
    height: 43
  },
  scrollArea: {
    width: 320,
    height: 189,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 98,
    marginLeft: 20
  },
  scrollArea_contentContainerStyle: {
    height: 189,
    width: 320
  },
  materialCardWithImageAndTitle: {
    height: 46,
    width: 293,
    marginTop: 23,
    alignSelf: "center"
  },
  materialCardWithImageAndTitle1: {
    height: 46,
    width: 293,
    marginTop: 8,
    alignSelf: "center"
  },
  materialCardWithImageAndTitle2: {
    height: 46,
    width: 293,
    marginTop: 10,
    alignSelf: "center"
  },
  scrollArea2: {
    width: 329,
    height: 213,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 55,
    marginLeft: 24
  },
  scrollArea2_contentContainerStyle: {
    width: 677,
    height: 213,
    flexDirection: "row"
  },
  materialCardBasic: {
    height: 143,
    width: 216
  },
  materialCardBasic1: {
    height: 143,
    width: 216,
    marginLeft: 11
  },
  materialCardBasic2: {
    height: 143,
    width: 216,
    marginLeft: 7
  },
  materialCardBasicRow: {
    height: 143,
    flexDirection: "row",
    flex: 1,
    marginRight: -348,
    marginLeft: 11,
    marginTop: 35
  }
});

export default Mainscreen;
