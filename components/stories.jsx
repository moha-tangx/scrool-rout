import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import data from "./../people.json";
const dh = Dimensions.get("window").height;

export default function Stories() {
  return (
    <FlatList
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.storyContainer}>
            <View style={styles.story}></View>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    minHeight: (dh / 100) * 10,
  },
  storyContainer: {
    height: (dh / 100) * 10,
    aspectRatio: 1,
    alignItems: "center",
  },
  story: {
    aspectRatio: 1,
    height: (dh / 100) * 7,
    borderColor: "#444",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 100,
  },
  name: {
    fontSize: 16,
    color: "white",
  },
});
