import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import Stories from "./components/stories.jsx";
import Posts from "./components/posts.jsx";
import Tab from "./components/tab.jsx";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style={styles.auto} />
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>instagram</Text>
        </View>
        <View>
          <Text style={styles.logo}>0 23</Text>
        </View>
      </View>
      <Stories></Stories>
      <Posts></Posts>
      <Tab selected={selected} select={setSelected}></Tab>
    </SafeAreaView>
  );
}
