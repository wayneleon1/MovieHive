import { View } from "react-native";
import React from "react";
import { COLORS } from "../constraint";

const Container = ({ bgColor, children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor || COLORS.DARK,
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 16,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
