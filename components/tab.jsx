import { StyleSheet, Pressable, View, Dimensions } from "react-native";
const { height: dh, width: dw } = Dimensions.get("window");

const links = ["post", "search", "activites", "profile"];

export default function tab({ select, selected }) {
  return (
    <View style={styles.tab}>
      {links.map((link, index) => {
        return (
          <Pressable
            key={link}
            onPress={() => select(index)}
            style={[styles.tabIco, selected == index && styles.selected]}
          ></Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: dw,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabIco: {
    height: 30,
    aspectRatio: 1,
    borderRadius: 5,
    borderColor: "#aaa",
    borderWidth: 2,
    marginBottom: 4,
  },
  selected: {
    backgroundColor: "#aaa",
  },
});
