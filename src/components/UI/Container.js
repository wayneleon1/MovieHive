import { View } from "react-native";
import React from "react";
import { COLORS } from "../constraint";

const Container = ({ bgColor, children, paddingTop, paddingBottom }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor || COLORS.DARK,
        paddingTop: paddingTop || 30,
        paddingBottom: paddingBottom || 20,
        paddingHorizontal: 16,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
