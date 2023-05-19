import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../../../../components/Tweet";
import tweets from "../../../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Link href={"/new-tweet"} asChild>
        <Entypo name="plus" style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    position: "absolute",
    color: "white",
    padding: 15,
    right: 15,
    bottom: 15,
    fontSize: 24,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
    backgroundColor: "#1c9bf0",
  },
});
