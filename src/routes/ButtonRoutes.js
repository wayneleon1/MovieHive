import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screens/Explore";
import MyList from "../screens/MyList";
import More from "../screens/More";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS } from "../components/constraint";
import HomeRoutes from "./HomeRoutes";

const Tab = createBottomTabNavigator();

export default function ButtonRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.VERYDARK,
          borderColor: COLORS.VERYDARK,
          height: 70,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "HomeRoutes":
              iconName = focused ? "home" : "home";
              break;
            case "Explore":
              iconName = focused ? "search1" : "search1";
              break;
            case "MyList":
              iconName = focused ? "folderopen" : "folderopen";
              break;
            case "More":
              iconName = focused ? "appstore-o" : "appstore-o";
              break;
            default:
              iconName = "circle";
              break;
          }
          const iconSize = focused ? size + 8 : size + 2;
          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="MyList" component={MyList} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
