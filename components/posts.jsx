import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
const { height: dh, width: dw } = Dimensions.get("window");
import data from "../people.json";
export default function posts() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={[styles.all, styles.post]}>
            <View style={[styles.postImg, styles.all]}></View>
            <View style={styles.postBotom}>
              <TextInput
                placeholder="comment"
                placeholderTextColor={"#aaa"}
                style={[styles.comment, styles.all]}
              />
              <View style={[styles.action, styles.all]}></View>
              <View style={[styles.action, styles.all]}></View>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  all: {
    borderColor: "#444",
    borderWidth: 3,
    borderRadius: 10,
  },
  post: {
    minHeight: dh / 3,
    maxHeight: dh / 2,
    width: dw - 20,
    marginBottom: 4,
    padding: 4,
    gap: 5,
  },
  postImg: {
    minHeight: dh / 4,
  },
  postBotom: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  comment: {
    flex: 1,
    maxWidth: dw / 2 + 20,
    paddingLeft: 20,
    fontSize: 22,
    color: "#aaa",
    height: 50,
  },
  action: {
    aspectRatio: 1,
    height: 40,
  },
});
