import { Dimensions, StyleSheet } from "react-native";

const { height: dh, width: dw } = Dimensions.get("window");

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#224",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 10,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    width: dw,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 30,
    color: "#eee",
  },
});
