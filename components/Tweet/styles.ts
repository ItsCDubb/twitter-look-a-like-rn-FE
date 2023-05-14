import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: "600",
  },
  userName: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    marginTop: 5,
    lineHeight: 20,
  },
  contentImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  contentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default styles;
