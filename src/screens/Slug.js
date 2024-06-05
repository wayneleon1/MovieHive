import { View, Text } from "react-native";
import React from "react";
import Container from "../components/UI/Container";

const Slug = ({ route }) => {
  const routes = route.params;
  return (
    <Container>
      <Text>Slug Page{routes.id}</Text>
    </Container>
  );
};

export default Slug;
