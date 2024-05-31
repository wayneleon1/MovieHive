import { StyleSheet } from "react-native";
import { COLORS } from "../components/constraint";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 21.6,
    color: COLORS.GRAY,
  },
  btn: {
    borderRadius: 6,
    paddingVertical: 8,
  },
});
